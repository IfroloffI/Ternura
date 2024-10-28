const express = require('express');
const Like = require('../models');

module.exports = function (wss) {
    const router = express.Router();

    // Эндпоинт для добавления нового лайка
    router.post('/', async (req, res) => {
        const { fromProfileId, toProfileId } = req.body;

        try {
            // Создание нового лайка
            const newLike = new Like({ fromProfileId, toProfileId });
            await newLike.save();

            // Уведомление всех подключенных клиентов о новом лайке
            const message = JSON.stringify({ event: 'new_like', data: { fromProfileId, toProfileId } });
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });

            res.status(201).json(newLike);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error adding like' });
        }
    });

    return router;
};
