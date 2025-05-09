const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); 

const app = express();
app.use(cors({
    origin: 'https://diegoeyza.github.io' 
}));

const API_KEY = '5e4b6cdcdfb24438b1d949bc743ac9d8';

app.get('/news', async (req, res) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&pageSize=10&apiKey=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: "Error fetching news", details: error.message });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
