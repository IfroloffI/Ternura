const { Schema } = require("mongoose");

const ProfilesSchema = new Schema({
  UserID:      { type: String, required: true }, 
  Nickname:    { type: String, required: true }, 
  Name:        { type: String, required: true }, 
  Surname:     { type: String, required: true }, 
  Phone:       { type: String, required: true }, 
  Email:       { type: String, required: true }, 
  Birth:       { type: String, required: true }, 
  Gender:      { type: String, required: true }, 
  Height:      { type: Number, required: true }, 
  Weight:      { type: Number, required: true }, 
  StepsAmount: { type: Number, required: true }, 
  PhotoURLs:   { type: [String], required: false }, 
  Qualities:   { type: [String], required: false }, 
  Interests:   { type: [String], required: false },
});

module.exports = ProfilesSchema;


/*const { Schema } = require("mongoose");

const ProfilesSchema = new Schema({
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

module.exports = ProfilesSchema;*/