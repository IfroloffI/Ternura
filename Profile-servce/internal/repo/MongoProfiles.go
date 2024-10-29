package repo

import (
	"context"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/domain"
	"github.com/pkg/errors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type ProfileRepoMongoDB struct {
	collection *mongo.Collection
}

func NewProfileRepoMongoDB(c *mongo.Collection) *ProfileRepoMongoDB {
	return &ProfileRepoMongoDB{
		collection: c,
	}
}

func (p *ProfileRepoMongoDB) GetAllProfiles(ctx context.Context) ([]*domain.UserProfile, error) {
	profiles := make([]*domain.UserProfile, 12)
	cursor, err := p.collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, errors.Wrap(err, "GetAllProfiles: ")
	}

	err = cursor.All(ctx, &profiles)
	if err != nil {
		return nil, errors.Wrap(err, "GetAllProfiles: ")
	}

	return profiles, nil
}

func (p *ProfileRepoMongoDB) GetProfileByID(ctx context.Context, id string) (*domain.UserProfile, error) {
	profile := domain.UserProfile{}
	filter := bson.M{"userID": id}
	err := p.collection.FindOne(ctx, filter).Decode(&profile)
	if err != nil {
		return nil, errors.Wrap(err, "GetProfileByID: ")
	}
	return &profile, err
}

func (p *ProfileRepoMongoDB) GetProfilesByGender(ctx context.Context, gender string) ([]*domain.UserProfile, error) {
	profiles := make([]*domain.UserProfile, 0)
	filter := bson.M{"gender": gender}
	cursor, err := p.collection.Find(ctx, filter)
	if err != nil {
		return nil, errors.Wrap(err, "GetAllProfiles: ")
	}

	err = cursor.All(ctx, &profiles)
	if err != nil {
		return nil, errors.Wrap(err, "GetAllProfiles: ")
	}

	return profiles, nil
}
