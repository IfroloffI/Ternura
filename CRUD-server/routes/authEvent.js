const express = require('express');
const axios = require('axios');

    const router = express.Router();

router.post('/', async (req, res) => {
    const { login } = req.body;

    try {
            const loginResponse = await axios.post('http://localhost:8086/login', {
                "username": login,
            });
    
            const token = loginResponse.data.token;

            console(token);
    
            const postsResponse = await axios.get('http://localhost:8086/posts', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
        res.status(200).json(postsResponse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;