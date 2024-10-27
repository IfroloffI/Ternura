const express = require("express");
const router = express.Router();
const { connectDB } = require("../models");

router.post("/", async (req, res) => {
    const { UserID, ...to_update_profile } = req.body; // Извлечение UserID из тела запроса
    try {
        const db = await connectDB();
        const result = await db.collection('profiles').updateOne(
            { UserID }, // Условие обновления по UserID
            { $set: to_update_profile } // Обновление данных
        );
        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;