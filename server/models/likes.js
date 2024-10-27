const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    fromProfileId: { type: String, required: true }, // ID профиля, который отправил лайк
    toProfileId: { type: String, required: true },   // ID профиля, который был лайкнут
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;