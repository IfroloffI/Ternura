const { getDB } = require('../config/db');

const TokenModel = {
    async findTokenByUserId(userId) {
        const db = getDB();
        return await db.collection('tokens').findOne({ userId });
    },

    async createToken(userId, token) {
        const db = getDB();
        const newToken = { userId, token };
        return await db.collection('tokens').insertOne(newToken);
    }
};

module.exports = TokenModel;
