package profileAnalysis

import (
	"math"

	"github.com/Benzogang-Tape/Ternura/Profile-servce/internal/domain"
)

// Функция для вычисления расстояния Левенштейна
func levenshtein(a, b string) int {
	if len(a) < len(b) {
		return levenshtein(b, a)
	}
	if len(b) == 0 {
		return len(a)
	}

	v0 := make([]int, len(b)+1)
	v1 := make([]int, len(b)+1)

	for i := range v0 {
		v0[i] = i
	}

	for i := 1; i <= len(a); i++ {
		v1[0] = i
		for j := 1; j <= len(b); j++ {
			cost := 1
			if a[i-1] == b[j-1] {
				cost = 0
			}
			v1[j] = min(v1[j-1]+1, v0[j]+1, v0[j-1]+cost)
		}
		copy(v0, v1)
	}

	return v1[len(b)]
}

func min(a, b, c int) int {
	if a < b {
		if a < c {
			return a
		}
		return c
	}
	if b < c {
		return b
	}
	return c
}

// Функция для расчета схожести между двумя профилями
func calculateSimilarity(userProfile, targetProfile domain.UserProfile) float64 {
	// Расстояние Левенштейна для текстовых полей
	nicknameDistance := float64(levenshtein(userProfile.Nickname, targetProfile.Nickname))
	nameDistance := float64(levenshtein(userProfile.Name, targetProfile.Name))
	surnameDistance := float64(levenshtein(userProfile.Surname, targetProfile.Surname))

	// Числовые поля (нормализуем их)
	heightDifference := math.Abs(userProfile.Height - targetProfile.Height)
	weightDifference := math.Abs(userProfile.Weight - targetProfile.Weight)
	stepsDifference := math.Abs(float64(userProfile.StepsAmount) - float64(targetProfile.StepsAmount))

	// Общая метрика: меньшая сумма лучше
	totalDistance := nicknameDistance + nameDistance + surnameDistance + heightDifference + weightDifference + stepsDifference
	return totalDistance
}
