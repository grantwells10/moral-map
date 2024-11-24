const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users from the database
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new user
router.post('/', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        gender: req.body.gender,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        education: req.body.education,
        employmentStatus: req.body.employmentStatus,
        responses: []
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Add a response to a user
router.post('/:id/responses', async (req, res) => {
    const {id} = req.params;
    const {dilemmaId, response} = req.body;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' }); 
        }

        user.responses.push({ dilemmaId, response });

        await user.save();

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});


module.exports = router;