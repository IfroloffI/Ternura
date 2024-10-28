package main

import (
	"context"
	"fmt"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/repo"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/service"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/transport/rest"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/usergen"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/pkg/config"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.uber.org/zap"
	"log"
	"net/http"
)

func main() {
	config.InitConfig()
	cfg := config.Parse()
	dsn := fmt.Sprintf("mongodb+srv://%s:%s@%s/?%s",
		cfg.DBCfg.User,
		cfg.DBCfg.Pass,
		cfg.DBCfg.Host,
		cfg.DBCfg.Params,
	)

	ctx := context.Background()
	sess, err := mongo.Connect(ctx, options.Client().ApplyURI(dsn))
	if err != nil {
		log.Panicf("Mongo connection failed: %s", err.Error())
	}
	collection := sess.Database("ternura").Collection("profiles")

	randomProfiles := usergen.GenerateRandomProfiles(20)
	for _, profile := range randomProfiles {
		_, err := collection.InsertOne(ctx, &profile)
		if err != nil {
			log.Println("Failed to add profile")
		}
	}
	//if n, _ := collection.CountDocuments(ctx, bson.D{}); n < 10 {
	//	collection.InsertOne(ctx, &domain.UserProfile{
	//		ID:          primitive.NewObjectID(),
	//		UserID:      "1",
	//		Nickname:    "TEST",
	//		Name:        "TEST",
	//		Surname:     "TEST",
	//		Phone:       "TEST",
	//		Email:       "TEST",
	//		Birth:       "TEST",
	//		Gender:      "TEST",
	//		Height:      0,
	//		Weight:      0,
	//		StepsAmount: 0,
	//		PhotoURLs:   []string{"https://i.pinimg.com/736x/fc/3f/df/fc3fdf111e8c5c3d2f696627845b43b3.jpg"},
	//		Qualities:   nil,
	//		Interests:   nil,
	//	})
	//	collection.InsertOne(ctx, &domain.UserProfile{
	//		ID:          primitive.NewObjectID(),
	//		UserID:      "2",
	//		Nickname:    "TEST",
	//		Name:        "TEST",
	//		Surname:     "TEST",
	//		Phone:       "TEST",
	//		Email:       "TEST",
	//		Birth:       "TEST",
	//		Gender:      "TEST",
	//		Height:      0,
	//		Weight:      0,
	//		StepsAmount: 0,
	//		PhotoURLs:   []string{"https://i.pinimg.com/736x/fc/3f/df/fc3fdf111e8c5c3d2f696627845b43b3.jpg", "https://avatars.mds.yandex.net/i?id=8f9aaeff949c29d3570f4575d304f8ec1c059fde-4885535-images-thumbs&n=13"},
	//		Qualities:   nil,
	//		Interests:   nil,
	//	})
	//	collection.InsertOne(ctx, &domain.UserProfile{
	//		ID:          primitive.NewObjectID(),
	//		UserID:      "2",
	//		Nickname:    "TEST",
	//		Name:        "TEST",
	//		Surname:     "TEST",
	//		Phone:       "TEST",
	//		Email:       "TEST",
	//		Birth:       "TEST",
	//		Gender:      "TEST",
	//		Height:      0,
	//		Weight:      0,
	//		StepsAmount: 0,
	//		PhotoURLs:   []string{"https://i.pinimg.com/736x/fc/3f/df/fc3fdf111e8c5c3d2f696627845b43b3.jpg", "https://avatars.mds.yandex.net/i?id=8f9aaeff949c29d3570f4575d304f8ec1c059fde-4885535-images-thumbs&n=13"},
	//		Qualities:   nil,
	//		Interests:   nil,
	//	})
	//}

	zapLogger, err := zap.NewProduction()
	if err != nil {
		log.Panicf("Failed to init zap logger: %s", err.Error())
	}
	defer zapLogger.Sync()
	logger := zapLogger.Sugar()

	profileStorage := repo.NewProfileRepoMongoDB(collection)
	profileHandler := service.NewProfileHandler(profileStorage)
	profileAPI := rest.NewProfileAPI(profileHandler, logger)

	router := rest.NewAppRouter(profileAPI).InitRouter(logger)

	err = http.ListenAndServe(cfg.AppPort, router)
	if err != nil {
		log.Panicf("RUNTIME ERROR: %s", err.Error())
	}
	// log.Fatal(http.ListenAndServe(":8080", nil))
}
