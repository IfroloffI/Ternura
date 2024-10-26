const express = require("express");
const router = express.Router();
const { someRequare } = require("../models"); // сюда путь до структуры данных MongoDB . js

router.post("/byId/:id", async (req, res) => { // параметры через / передаём
    const post = req.body;
    await // сохранение
    res.json(post);
  });

module.exports = router;