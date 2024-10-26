package service

import (
	"context"

	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/domain"
	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/profileAnalysis"
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

func (p *ProfileHandler) GetSuitableProfiles(ctx context.Context, profile domain.UserProfile) ([]domain.UserProfile, error) {
	// TODO: исправить все лишние копирования данных, свести всё к ссылкам
	profileList, err := profileAnalysis.SortProfilesForSimilarity(profile, nil)
	return profileList, err
}

func (p *ProfileHandler) GetProfileByID(ctx context.Context, id string) (*domain.UserProfile, error) {
	return nil, nil
}

func (p *ProfileHandler) GetProfilesByGender(ctx context.Context, gender string) ([]*domain.UserProfile, error) {
	return nil, nil
}
