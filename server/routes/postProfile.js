const express = require("express");
const router = express.Router();
const db_Profiles = require("../models");

router.post("/", async (req, res) => {
    const to_insert_profile = req.body;
    try {
        const profile = new db_Profiles(to_insert_profile);
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;