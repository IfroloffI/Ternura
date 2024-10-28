package usergen

import (
	"fmt"
	"math/rand"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type ProfileInfo struct {
	ID          primitive.ObjectID `bson:"_id" json:"id"`
	UserID      string             `bson:"userID" json:"userID"`
	Nickname    string             `bson:"nickname" json:"nickname"`
	Name        string             `bson:"name" json:"name"`
	Surname     string             `bson:"surname" json:"surname"`
	Phone       string             `bson:"phone" json:"phone"`
	Email       string             `bson:"email" json:"email"`
	Birth       string             `bson:"birth" json:"birth"`
	Gender      string             `bson:"gender" json:"gender"`
	Height      float64            `bson:"height" json:"height"`
	Weight      float64            `bson:"weight" json:"weight"`
	StepsAmount uint64             `bson:"stepsAmount" json:"stepsAmount"`
	PhotoURLs   []string           `bson:"photoURLs" json:"photoURLs"`
	Qualities   []string           `bson:"qualities" json:"qualities"`
	Interests   []string           `bson:"interests" json:"interests"`
}

func GenerateRandomProfiles(n int) []ProfileInfo {
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
		"https://i.pinimg.com/736x/7c/c9/05/7cc9053503d43305a83856645027055e.jpg",
		"https://i.pinimg.com/564x/a9/16/bc/a916bc88f8ba7885f9e4acadf8bad656.jpg",
		"https://i.pinimg.com/564x/4d/2f/38/4d2f38e65f6846a6fb4825abd932f73a.jpg",
		"https://i.pinimg.com/564x/ae/08/a6/ae08a667cf29c634b38b7d2d6c3d3e37.jpg",
		"https://i.pinimg.com/564x/b0/bb/1b/b0bb1b620c7d10d6326308d89f79247d.jpg",
		"https://i.pinimg.com/564x/59/59/52/5959526847cf6be79778c37505604411.jpg",
		"https://i.pinimg.com/564x/42/e1/f9/42e1f9b50d2cb9e3d040300b6307f1fc.jpg",
		"https://i.pinimg.com/564x/c0/e5/e6/c0e5e65749ab434074c183193fd686ba.jpg",
		"https://i.pinimg.com/736x/7c/c9/05/7cc9053503d43305a83856645027055e.jpg",
		"https://i.pinimg.com/564x/a9/16/bc/a916bc88f8ba7885f9e4acadf8bad656.jpg",
		"https://i.pinimg.com/564x/4d/2f/38/4d2f38e65f6846a6fb4825abd932f73a.jpg",
		"https://i.pinimg.com/564x/ae/08/a6/ae08a667cf29c634b38b7d2d6c3d3e37.jpg",
		"https://i.pinimg.com/564x/b0/bb/1b/b0bb1b620c7d10d6326308d89f79247d.jpg",
		"https://i.pinimg.com/564x/59/59/52/5959526847cf6be79778c37505604411.jpg",
		"https://i.pinimg.com/564x/42/e1/f9/42e1f9b50d2cb9e3d040300b6307f1fc.jpg",
		"https://i.pinimg.com/564x/c0/e5/e6/c0e5e65749ab434074c183193fd686ba.jpg",
	}

	femalePhoto := []string{
		"https://avatars.mds.yandex.net/i?id=53c2137ff28f4b96f224c75432f936098e7a8080-9244753-images-thumbs&n=13",
		"https://avatars.mds.yandex.net/i?id=853e3d1920fbc34d1f169b41009b2b571c5cbc6e-7106899-images-thumbs&n=13",
		"https://avatars.mds.yandex.net/i?id=cba82fabe3059de009dc0507c56e07b0040b7e86-11431503-images-thumbs&n=13",
		"https://yandex-images.clstorage.net/4V8tfM269/182d9f7bvQS/fR5a8_tkjUFbsIQoxay-Jq5AQK0cS3R8T4jgawUn0WfTZL-BrjksuQLnxRIfiF-4OeD1sazUad06uoTAvv10g2lbCeMrophVyrbXO8Ru_yF8hxKtDYxg_opOIqlEZkvpTqw3WuRhsiUI7QJHSR0I6r4wZCt1RSTW-moWx-bzvtex3xM79PENCpXjya3Krnvh90LFY0OEI3-HVmV9mv9Bb8OlutGk5nonB2KBBsvXzGokemHkP5gjHDcuFIlp9nVXM1KTNPLzB0QWYA-miGE-bD9OQqSEgKs0hFqrdxr6zSrPKHWZ663zoYJtSMVOUQhl5nwrqH6f6df7IRMLIzuw3THVWLwxs0zLnqJOIYij96mxhgxsDkLo-k8VrD7Tt81vz6c5WGtk-mHBp4aCAF9HJuixJyL3X-nec2Rciq7xfxe5HhmzcTKCjZEjiapDLTZg_09H5k9E77wNH2R00nDOZ8CmPxDtZjDlz6IBCseWyyavuKtls5YolXcjUMWmNzgd9lYWsT9_xEEaqsblQmexaneJgyMHzy72ilxo81i-AquCpn0WLyRw5Ubux0YLEcygbf9o5D_fZB06rtWIpXs3W_ff1_65_EPF1uDBJYVv-Ss5goKtTAjlu0Keov7cfoluTmA8Vm3nvWRAag8JB1nHJuAxJa-3EWLRO67aAm34vxbwm5L6O34PCpxji2vMIfam-0hEbI7Haz8FkqG0UTDBpwchNtnv6HvmDmTJz0wdD-8nfmgnu13v175tmwNmOzfTMB7cO3P1xAVWrsolDGc2Kb0PymaKhaK1iBolM9uyyOZGr7nQKmk4Kk5oj0mK3ERmJv3lrfTYYhB7Z9JKqXk3HzefE_R5PoZDHe0EYE5g_ak0QsNkB0jgdMgTIH3VNMmggGBzVuot_GhO6IxKy17B5iT6rOi5Ue2Vei-QiGK8-BR_HRF8frFEi9-qCOHHJ3nicUdMJg6AYjVDV2K804",
		"https://avatars.mds.yandex.net/i?id=67cb33661ee01981a0a8c900f2a313a10b070206-5246120-images-thumbs&n=13",
		"https://i.pinimg.com/564x/0d/30/3b/0d303b9f49dee99fa6e71088e5787bb5.jpg",
		"https://i.pinimg.com/564x/89/ff/1a/89ff1a5fdc3734cc90c7eba167f95ab6.jpg",
		"https://i.pinimg.com/564x/14/05/a5/1405a58a48714a4ab0ea7571356fd188.jpg",
		"https://i.pinimg.com/564x/06/38/ec/0638eca74cc4388d41819803856e9573.jpg",
		"https://i.pinimg.com/564x/cd/92/52/cd92525ed7901f3c2bd9c1561915f00e.jpg",
		"https://i.pinimg.com/564x/ad/af/0f/adaf0f843ea5b7e1be000e7ba9c54654.jpg",
		"https://i.pinimg.com/564x/9f/82/2c/9f822c223eef013bf66a4033b53e8458.jpg",
		"https://i.pinimg.com/736x/e7/10/c5/e710c52c83a64cf67fb8af24eb8d5853.jpg",
		"https://i.pinimg.com/564x/92/3a/cd/923acdecdad61e5a8c6ab746ab660b62.jpg",
		"https://i.pinimg.com/564x/92/3a/cd/923acdecdad61e5a8c6ab746ab660b62.jpg",
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
			ID:       primitive.NewObjectID(),
			UserID:   fmt.Sprintf("user%03d", i),
			Nickname: fmt.Sprintf("User%d", i),
			Name:     names[rand.Intn(len(names))],
			Surname:  surnames[rand.Intn(len(surnames))],
			Phone:    fmt.Sprintf("+%d%08d", rand.Intn(1000), rand.Intn(10000000)),
			Email:    fmt.Sprintf("user%d@example.com", i),
			Birth: func() string {
				//currentYear := time.Now().Year()
				age := rand.Intn(23) + 18
				//birthYear := currentYear - age
				//month := rand.Intn(12) + 1
				//day := rand.Intn(28) + 1
				//return fmt.Sprintf("%d-%02d-%02d", birthYear, month, day)
				return fmt.Sprintf("%d", age)
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

//func getJson() {
//	profiles := generateRandomProfiles(100)
//
//	profilesJSON, err := json.MarshalIndent(profiles, "", "  ")
//	if err != nil {
//		fmt.Println("Error generating JSON:", err)
//		return
//	}
//
//	fmt.Println(string(profilesJSON))
//}
