const express = require('express');
const router = express.Router();
const Dilemma = require('../models/Dilemma');

// Get all dilemmas from the database
router.get('/', async (req, res) => {
    try {
        const dilemmas = await Dilemma.find();
        res.json(dilemmas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new dilemma
router.post('/', async (req, res) => {
    const dilemma = new Dilemma({
        issue: req.body.issue,
        question: req.body.question,
        options: req.body.options,
    });
    try {
        const newDilemma = await dilemma.save();
        res.status(201).json(newDilemma);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get a sample of 10 random dilemmas
router.get('/sample', async (req, res) => {
    try {
        const dilemmas = await Dilemma.aggregate([{ $sample: { size: 10 } }]);
        res.json(dilemmas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;