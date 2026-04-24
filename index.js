const express = require('express');
const app = express();

const PORT = 3000;

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// Main route
app.get('/', (req, res) => {
    res.send('CI/CD Demo App Running!');
});

// Home route
app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});