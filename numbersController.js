const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    const urls = req.query.url;

    if (!urls || !Array.isArray(urls)) {
        return res.status(400).json({ error: 'Invalid or missing URL parameter(s)' });
    }

    try {
        const result = [];
        for (const url of urls) {
            console.log('Fetching data from:', url);
            const response = await axios.get(url);
            console.log('Received data:', response.data);
            result.push(response.data);
        }
        res.json(result);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Error fetching data from URL(s)' });
    }
});

module.exports = router;
