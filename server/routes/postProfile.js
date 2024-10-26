const express = require("express");
const router = express.Router();
const { profiles } = require("../models"); // сюда путь до структуры данных MongoDB . js

router.post("/byId/:id", async (req, res) => { // параметры через / передаём
    const profile = req.body;
    await profiles.create(profile);
    res.json(profile);
});

module.exports = router;