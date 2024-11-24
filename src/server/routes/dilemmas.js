const express = require('express');
const router = express.Router();
const Dilemma = require('../models/Dilemma');
const User = require('../models/User');

// Get a sample of 10 random dilemmas
router.get('/sample', async (req, res) => {
    try {
        const dilemmas = await Dilemma.aggregate([{ $sample: { size: 10 } }]);
        res.status(200).json(dilemmas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;