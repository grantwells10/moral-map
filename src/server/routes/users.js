const express = require('express');
const router = express.Router();
const User = require('../models/User');

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

// Add a user's response to a dilemma (update if they change responses)
router.post('/:userId/responses', async (req, res) => {

    const { userId } = req.params;
    const { dilemmaId, response } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Now check if they already responded to that dilemma
        const existingResponseIdx = user.responses.findIndex(
            (r) => r.dilemmaId.toString() === dilemmaId.toString()
        );
        
        // If present, update
        if (existingResponseIdx >= 0) {
            user.responses[existingResponseIdx].response = response;
            console.log("Updated response");
        } else {
            user.responses.push({ dilemmaId, response});
            console.log("Added fresh response")
        }

        // Save changes
        await user.save(); 

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})


module.exports = router;