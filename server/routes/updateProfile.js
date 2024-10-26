const express = require("express");
const router = express.Router();
const { Profiles } = require("../models");

router.post("/", async (req, res) => {
    const profile = req.body;
    await Profiles.insert(profile);
    res.json(profile);
});

module.exports = router;