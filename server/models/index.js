"use strict";

const mongoose = require('mongoose');
const Profiles = require("../models");

mongoose.connect('mongodb+srv://DetDOM:DetDOM_BMSTU_1899@ternura.wlbw2.mongodb.net/?retryWrites=true&w=majority&appName=Ternura');

const db_Profiles = mongoose.model('profiles', Profiles);

module.exports = db_Profiles;