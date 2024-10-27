const express = require('express');
const jwt = require('jsonwebtoken');
const TokenModel = require('../model/tokenModel');
const router = express.Router();

// Добавление пользователя и выдача токена
router.post('/register', async (req, res) => {
    const { userId } = req.body;

    // Проверка, существует ли токен
    const existingToken = await TokenModel.findTokenByUserId(userId);
    if (existingToken) {
        return res.status(200).json({
            message: 'Token already exists',
            token: existingToken.token,
        });
    }

    // Создание нового токена
    const token = jwt.sign({ userId }, "Morena", { expiresIn: '1h' });

    // Сохранение токена в базе данных
    await TokenModel.createToken(userId, token);

    return res.status(201).json({ token });
});

// Определение ID пользователя по токену
router.get('/profile', async (req, res) => {
    const token = req.headers['authorization'].split()[0].split(' ')[1];

    console.log(token);

    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    
    try {
        const decoded = jwt.verify(token, "Morena");
        res.status(200).json({ userId: decoded.userId });
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
});

module.exports = router;
