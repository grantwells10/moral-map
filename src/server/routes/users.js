const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Add a new user
router.post('/', async (req, res) => {
    const user = new User({
        age: req.body.age,
        gender: req.body.gender,
        state: req.body.state,
        country: req.body.country,
        locationType: req.body.locationType,
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

router.post('/:userId/responses/bulk', async (req, res) => {
    const { userId } = req.params;
    const { responses, passedAttentionCheck } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Convert responses object to array format
        const responsesArray = Object.entries(responses).map(([dilemmaId, response]) => ({
            dilemmaId,
            response
        }));

        // Add responses
        user.responses = responsesArray;
        user.passedAttentionCheck = passedAttentionCheck;

        // Save changes
        await user.save();

        res.status(200).json(user);

        console.log("User responses added in bulk!");
    } catch (err) {
        console.error("Error details:", err); 
        res.status(500).json({message: err.message});
    }
});


module.exports = router;