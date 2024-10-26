const express = require("express");
const router = express.Router();
const db_Profiles = require("../models");

router.post("/", async (req, res) => {
    const to_update_profile = req.body;
    try {
        const profile = new db_Profiles(to_update_profile);
        await profile.replaceOne({"user_id": to_update_profile.user_id});
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;