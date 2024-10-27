package questionnaireMass

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type ProfileInfo struct {
	ID          primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	UserID      string             `bson:"userID" json:"userID"`
	Nickname    string             `bson:"nickname" json:"nickname"`
	Name        string             `bson:"name" json:"name"`
	Surname     string             `bson:"surname" json:"surname"`
	Phone       string             `bson:"phone" json:"phone"`
	Email       string             `bson:"email" json:"email"`
	Birth       int                `bson:"birth" json:"birth"`
	Gender      string             `bson:"gender" json:"gender"`
	Height      float64            `bson:"height" json:"height"`
	Weight      float64            `bson:"weight" json:"weight"`
	StepsAmount uint64             `bson:"stepsAmount" json:"stepsAmount"`
	PhotoURLs   []string           `bson:"photoURLs" json:"photoURLs"`
	Qualities   []string           `bson:"qualities" json:"qualities"`
	Interests   []string           `bson:"interests" json:"interests"`
}

func generateRandomProfiles(n int) []ProfileInfo {
	rand.Seed(time.Now().UnixNano())

	names := []string{"Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Jack",
		"Katie", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Rachel", "Sam", "Tina",
		"Uma", "Victor", "Wendy", "Xander", "Yara", "Zack", "Abby", "Ben", "Cara", "Dan"}
	surnames := []string{"Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
		"Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
		"Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson"}
	genders := []string{"male", "female"}
	qualities := []string{"kind", "funny", "optimistic", "intelligent", "adventurous",
		"creative", "patient", "caring", "confident", "curious",
		"honest", "empathetic", "hardworking", "reliable", "determined",
		"friendly", "thoughtful", "brave", "disciplined", "charismatic",
		"generous", "polite", "ambitious", "loyal", "flexible",
		"humble", "energetic", "diligent", "perceptive", "sociable"}
	interests := []string{"traveling", "reading", "fitness", "photography", "yoga",
		"painting", "cooking", "gardening", "hiking", "cycling",
		"music", "writing", "dancing", "gaming", "running",
		"swimming", "skiing", "movies", "theater", "fishing",
		"coding", "blogging", "crafting", "bird watching", "collecting",
		"volunteering", "surfing", "astrology", "scuba diving", "martial arts"}

	malePhoto := []string{
		"ternura/public/images/man1.jpg",
		"ternura/public/images/man2.jpg",
		"ternura/public/images/man3.jpg",
		"ternura/public/images/man4.jpg",
		"ternura/public/images/man5.jpg",
		"ternura/public/images/man6.jpg",
		"ternura/public/images/man7.jpg",
		"ternura/public/images/man8.jpg",
		"ternura/public/images/man9.jpg",
		"ternura/public/images/man10.jpg",
	}

	femalePhoto := []string{
		"ternura/public/images/girl1.jpg",
		"ternura/public/images/girl2.jpg",
		"ternura/public/images/girl3.jpg",
		"ternura/public/images/girl4.jpg",
		"ternura/public/images/girl5.jpg",
		"ternura/public/images/girl6.jpg",
		"ternura/public/images/girl7.jpg",
		"ternura/public/images/girl8.jpg",
		"ternura/public/images/girl9.jpg",
		"ternura/public/images/girl10.jpg",
	}

	var profiles []ProfileInfo

	for i := 0; i < n; i++ {
		gender := genders[rand.Intn(len(genders))]

		var photo []string
		if gender == "male" {
			photo = []string{
				malePhoto[rand.Intn(len(malePhoto))],
				malePhoto[rand.Intn(len(malePhoto))],
			}
		} else {
			photo = []string{
				femalePhoto[rand.Intn(len(femalePhoto))],
				femalePhoto[rand.Intn(len(femalePhoto))],
			}
		}

		profile := ProfileInfo{
			UserID:   fmt.Sprintf("user%03d", i),
			Nickname: fmt.Sprintf("User%d", i),
			Name:     names[rand.Intn(len(names))],
			Surname:  surnames[rand.Intn(len(surnames))],
			Phone:    fmt.Sprintf("+%d%08d", rand.Intn(1000), rand.Intn(10000000)),
			Email:    fmt.Sprintf("user%d@example.com", i),
			Birth: func() int {
				age := rand.Intn(23) + 18
				month := rand.Intn(12) + 1
				day := rand.Intn(28) + 1

				if month > int(time.Now().Month()) || (month == int(time.Now().Month()) && day > time.Now().Day()) {
					age++
				}

				return age
			}(),
			Gender:      gender,
			Height:      rand.Float64()*50 + 150,
			Weight:      rand.Float64()*50 + 50,
			StepsAmount: uint64(rand.Intn(20000)),
			PhotoURLs:   photo,
			Qualities:   []string{qualities[rand.Intn(len(qualities))], qualities[rand.Intn(len(qualities))]},
			Interests:   []string{interests[rand.Intn(len(interests))], interests[rand.Intn(len(interests))]},
		}
		profiles = append(profiles, profile)
	}

	return profiles
}

func getJson() {
	profiles := generateRandomProfiles(100)

	profilesJSON, err := json.MarshalIndent(profiles, "", "  ")
	if err != nil {
		fmt.Println("Error generating JSON:", err)
		return
	}

	fmt.Println(string(profilesJSON))
}
