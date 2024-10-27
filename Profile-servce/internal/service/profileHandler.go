package service

import (
	"context"

	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/domain"
	"github.com/pkg/errors"
)

type ProfileStorage interface {
	GetAllProfiles(ctx context.Context) ([]*domain.UserProfile, error)
	GetProfilesByGender(ctx context.Context, gender string) ([]*domain.UserProfile, error)
	GetProfileByID(ctx context.Context, id string) (*domain.UserProfile, error)
}

type ProfileHandler struct {
	repo ProfileStorage
}

func NewProfileHandler(repo ProfileStorage) *ProfileHandler {
	return &ProfileHandler{
		repo: repo,
	}
}

func (p *ProfileHandler) GetAllProfiles(ctx context.Context) ([]*domain.UserProfile, error) {
	profileList, err := p.repo.GetAllProfiles(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "GetAllProfiles: ")
	}
	return profileList, nil
}

func (p *ProfileHandler) GetSuitableProfiles(ctx context.Context, profileID string) ([]*domain.UserProfile, error) {
	userProfile, err := p.GetProfileByID(ctx, profileID)
	if err != nil {
		return nil, errors.Wrap(err, "GetProfileByID: ")
	}
	userGender := userProfile.Gender
	suitableProfiles, err := p.GetProfilesByGender(ctx, userGender)
	if err != nil {
		return nil, errors.Wrap(err, "GetSuitableProfiles: ")
	}
	recs := RecommendProfiles(*userProfile, suitableProfiles)

	sortedProfiles := make([]*domain.UserProfile, len(recs))
	for _, item := range recs {
		sortedProfiles = append(sortedProfiles, &item.Profile)
	}

	return sortedProfiles, nil
}

func (p *ProfileHandler) GetProfileByID(ctx context.Context, id string) (*domain.UserProfile, error) {
	profile, err := p.repo.GetProfileByID(ctx, id)
	if err != nil {
		return nil, errors.Wrap(err, "GetProfileByID: ")
	}
	return profile, nil
}

func (p *ProfileHandler) GetProfilesByGender(ctx context.Context, gender string) ([]*domain.UserProfile, error) {
	profileList, err := p.repo.GetProfilesByGender(ctx, gender)
	if err != nil {
		return nil, errors.Wrap(err, "GetProfilesByGender: ")
	}
	return profileList, nil
}
