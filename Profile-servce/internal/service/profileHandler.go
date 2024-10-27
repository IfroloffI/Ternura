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

func (p *ProfileHandler) GetSuitableProfiles(ctx context.Context, profile domain.UserProfile) ([]*domain.UserProfile, error) {
	//// TODO: исправить все лишние копирования данных, свести всё к ссылкам
	//profileList, err := profileAnalysis.SortProfilesForSimilarity(profile, nil)
	//return profileList, err
	return nil, nil
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
