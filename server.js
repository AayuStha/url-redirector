const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// In-memory storage for URL mappings
const urlMappings = {};

// API Endpoint to create a mapping
app.post('/create', (req, res) => {
    const { original_url, custom_url } = req.body;

    if (!original_url || !custom_url) {
        return res.status(400).json({ error: "Both 'original_url' and 'custom_url' are required." });
    }

    if (urlMappings[custom_url]) {
        return res.status(400).json({ error: 'Custom URL already exists.' });
    }

    // Save the mapping
    urlMappings[custom_url] = original_url;
    res.status(201).json({
        message: 'Mapping created successfully.',
        custom_url: `${req.headers.host}/${custom_url}`,
        original_url,
    });
});

// API Endpoint to get all mappings
app.get('/mappings', (req, res) => {
    res.status(200).json(urlMappings);
});

// Route to handle custom URLs and redirect
app.get('/:custom_url', (req, res) => {
    const custom_url = req.params.custom_url;

    const original_url = urlMappings[custom_url];
    if (!original_url) {
        return res.status(404).send('Custom URL not found.');
    }

    res.redirect(original_url);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
