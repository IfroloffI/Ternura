"use strict";

const config = require(__dirname + "/../config/config.json");

const mongoose = require('mongoose');
const Profiles = require("../models");
const Like = require("../models");

mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Подключение к MongoDB успешно!');
})
.catch(err => {
    console.error('Ошибка подключения к MongoDB:', err);
});

const db_Profiles = mongoose.model('profiles', Profiles);
const db_Likes = mongoose.model('likes', Like);

module.exports = db_Profiles, db_Likes;