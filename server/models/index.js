"use strict";

const config = require(__dirname + "/../config/config.json");

const mongoose = require('mongoose');
const Profiles = require("../models");

console.log(config.MongoDB_href);
mongoose.connect(config.MongoDB_href);

const db_Profiles = mongoose.model('profiles', Profiles);

module.exports = db_Profiles;