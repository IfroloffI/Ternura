package profileAnalysis

import (
	"sort"

	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/domain"
)

type SimilarityScore struct {
	Profile domain.UserProfile
	Score   float64
}

func sortProfilesForSimilarity(targetProfile domain.UserProfile, profiles []domain.UserProfile) ([]domain.UserProfile, error) {
	var similarityScores []SimilarityScore

	for _, profile := range profiles {
		score := calculateSimilarity(profile, targetProfile)
		similarityScores = append(similarityScores, SimilarityScore{Profile: profile, Score: score})
	}

	// Сортировка по возрастанию (меньше значение — больше схожесть)
	sort.Slice(similarityScores, func(i, j int) bool {
		return similarityScores[i].Score < similarityScores[j].Score
	})

	// Возвращаем отсортированный список анкет
	sortedProfiles := []domain.UserProfile{}
	for _, item := range similarityScores {
		sortedProfiles = append(sortedProfiles, item.Profile)
	}
	return sortedProfiles, nil
}
