const express = require("express");
const router = express.Router();
const { connectDB } = require("../models");

router.post("/", async (req, res) => {
    const to_insert_profile = req.body;
    try {
        const db = await connectDB();
        const result = await db.collection('profiles').insertOne(to_insert_profile);
        res.status(201).json({ id: result.insertedId, ...to_insert_profile }); // Возврат сохраненного профиля с id
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
