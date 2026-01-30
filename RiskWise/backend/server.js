require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Data Store (In-memory for prototype)
const users = [];
const riskProfiles = [];

// API Routes
app.get('/', (req, res) => {
    res.send('RiskWise API is running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
