"use strict";

const fs = require("fs");
const path = require("path");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1
const connectDB = ()=>{
    mongoose.connect(` mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1`)
    .then(()=>{
       console.log("DB connection successful.");
    })
    .catch((err)=>{
       console.log(`DB connection error:${err}`);
    });
    }

module.exports = db;