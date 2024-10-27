package service

import (
	"math"
	"strconv"

	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/domain"
)

type SimilarityScore struct {
	Profile domain.UserProfile
	Score   float64
}

func levenshteinDistance(a, b string) int {
	lenA := len(a)
	lenB := len(b)

	distance := make([][]int, lenA+1)
	for i := range distance {
		distance[i] = make([]int, lenB+1)
	}

	for i := 0; i <= lenA; i++ {
		distance[i][0] = i
	}
	for j := 0; j <= lenB; j++ {
		distance[0][j] = j
	}

	for i := 1; i <= lenA; i++ {
		for j := 1; j <= lenB; j++ {
			cost := 0
			if a[i-1] != b[j-1] {
				cost = 1
			}
			distance[i][j] = min(
				distance[i-1][j]+1, // удаление
				min(
					distance[i][j-1]+1,      // вставка
					distance[i-1][j-1]+cost, // замена
				),
			)
		}
	}

	return distance[lenA][lenB]
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func CalculateSimilarity(userA, userB domain.UserProfile) float64 {
	var score float64
	const likeWeight = 0.5
	const ageWeight = 0.3
	const genderWeight = 0.2
	const interestWeight = 0.3
	const heightWeight = 0.1
	const weightWeight = 0.1
	const stepsWeight = 0.1

	ageA := ConvertBirthToAge(userA.Birth)
	ageB := ConvertBirthToAge(userB.Birth)
	if ageA == ageB {
		score += ageWeight
	}

	//if userA.Gender != userB.Gender {
	//	score += genderWeight
	//}

	common := 0
	for _, interestA := range userA.Interests {
		for _, interestB := range userB.Interests {
			if levenshteinDistance(interestA, interestB) <= 4 { // Порог близости (4 символа)
				common++
			}
		}
	}
	score += (float64(common) / float64(len(userA.Interests)+len(userB.Interests)-common)) * interestWeight

	heightDiff := math.Abs(userA.Height - userB.Height)
	if heightDiff <= 10 { // Порог схожести по росту (10 см)
		score += heightWeight
	}

	weightDiff := math.Abs(userA.Weight - userB.Weight)
	if weightDiff <= 10 { // Порог схожести по весу (10 кг)
		score += weightWeight
	}

	stepsDiff := math.Abs(float64(userA.StepsAmount) - float64(userB.StepsAmount))
	if stepsDiff <= 2000 { // Порог схожести по количеству шагов (2000 шагов)
		score += stepsWeight
	}

	return score
}

func ConvertBirthToAge(birth string) int {
	year, _ := strconv.Atoi(birth)
	return year
}
