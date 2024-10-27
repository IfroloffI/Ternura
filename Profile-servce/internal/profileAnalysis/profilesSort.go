package profileAnalysis

import (
	"sort"

	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/domain"
)

func SortProfilesForSimilarity(targetProfile domain.UserProfile, profiles []domain.UserProfile) ([]domain.UserProfile, error) {
	var similarityScores []SimilarityScore

	for _, profile := range profiles {
		score := CalculateSimilarity(profile, targetProfile)
		similarityScores = append(similarityScores, SimilarityScore{Profile: profile, Score: score})
	}

	sort.Slice(similarityScores, func(i, j int) bool {
		return similarityScores[i].Score < similarityScores[j].Score
	})

	sortedProfiles := []domain.UserProfile{}
	for _, item := range similarityScores {
		sortedProfiles = append(sortedProfiles, item.Profile)
	}
	return sortedProfiles, nil
}

// Новая
func RecommendProfiles(user domain.UserProfile) []SimilarityScore {
	var similarityScores []SimilarityScore
	var dataset // TODO передать dataset
	for _, otherUser := range dataset {
		if otherUser.UserID == user.UserID {
			continue // Пропускаем самого себя
		}
		similarity := CalculateSimilarity(user, otherUser)
		if similarity > 0.0 { // Мы можем включить профили с любым рейтинговым значением
			similarityScores = append(similarityScores, SimilarityScore{Profile: otherUser, Score: similarity})
		}
	}

	// Сортируем по рейтингу сходства
	sort.Slice(similarityScores, func(i, j int) bool {
		return similarityScores[i].Score > similarityScores[j].Score
	})

	return similarityScores
}
