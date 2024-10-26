package main

import (
	"context"
	"fmt"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/domain"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/repo"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/service"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/transport/rest"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/pkg/config"
	"github.com/spf13/viper"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.uber.org/zap"
	"log"
	"net/http"
)

func initConfig() {
	viper.SetConfigName("config/config.yaml")
	viper.AddConfigPath(".")
	if err := viper.ReadInConfig(); err != nil {
		log.Panicf("Fatal error config file: %s", err.Error())
	}
}

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

	if n, _ := collection.CountDocuments(ctx, bson.D{}); n == 0 {
		collection.InsertOne(ctx, &domain.UserProfile{
			ID:          primitive.NewObjectID(),
			UserID:      "1",
			Nickname:    "TEST",
			Name:        "TEST",
			Surname:     "TEST",
			Phone:       "TEST",
			Email:       "TEST",
			Birth:       "TEST",
			Gender:      "TEST",
			Height:      0,
			Weight:      0,
			StepsAmount: 0,
			PhotoURLs:   nil,
			Qualities:   nil,
			Interests:   nil,
		})
		collection.InsertOne(ctx, &domain.UserProfile{
			ID:          primitive.NewObjectID(),
			UserID:      "2",
			Nickname:    "TEST",
			Name:        "TEST",
			Surname:     "TEST",
			Phone:       "TEST",
			Email:       "TEST",
			Birth:       "TEST",
			Gender:      "TEST",
			Height:      0,
			Weight:      0,
			StepsAmount: 0,
			PhotoURLs:   nil,
			Qualities:   nil,
			Interests:   nil,
		})
	}

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

	addr := ":8080"
	err = http.ListenAndServe(addr, router)
	if err != nil {
		log.Panicf("RUNTIME ERROR")
	}
	// log.Fatal(http.ListenAndServe(":8080", nil))
}
