const express = require("express");
const router = express.Router();
const { profiles } = require("../models");

router.post("/", async (req, res) => {
    const profile = req.body;
    await profiles.create(profile);
    res.json(profile);
});

module.exports = router;