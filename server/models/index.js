"use strict";

const config = require(__dirname + "/../config/config.json");

const mongoose = require('mongoose');
const Profiles = require("../models");

mongoose.connect(config.MongoDB_href)    
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const db_Profiles = mongoose.model('profiles', Profiles);

module.exports = db_Profiles;