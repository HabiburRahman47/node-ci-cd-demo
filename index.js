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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
