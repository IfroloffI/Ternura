const express = require("express");
const router = express.Router();
const { Profiles } = require("../models");

router.post("/", async (req, res) => {
    const profile = req.body;
    const foo = {
        "Zalopa": "da"
    };
    res.json(foo);
});

module.exports = router;