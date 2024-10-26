const { Schema } = require("mongoose");

const profileSchema = new Schema({
  ID:          primitive.ObjectID `json:"id" bson:"_id"`,
  UserID:      string             `json:"userID" bson:"userID"`,
  Nickname:    string             `json:"nickname" bson:"nickname"`,
  Name:        string             `json:"name" bson:"name"`,
  Surname:     string             `json:"surname" bson:"surname"`,
  Phone:       string             `json:"phone" bson:"phone"`,
  Email:       string             `json:"email" bson:"email"`,
  Birth:       string             `json:"birth" bson:"birth"`,
  Gender:      string             `json:"gender" bson:"gender"`,
  Height:      float64            `json:"height" bson:"height"`,
  Weight:      float64            `json:"weight" bson:"weight"`,
  StepsAmount: uint64             `json:"stepsAmount" bson:"stepsAmount"`,
  PhotoURLs:   [string]           `json:"photoURLs" bson:"photoURLs"`,
  Qualities:   [string]           `json:"qualities" bson:"qualities"`,
  Interests:   [string]           `json:"interests" bson:"interests"`,
});

module.exports = profileSchema;