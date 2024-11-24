const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String, // lowkey should be anonymous
    lastName: String,
    age: Number,
    gender: String,
    city: String,
    state: String,
    country: String,
    education: String,
    employmentStatus: String,
    responses: [{
        dilemmaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dilemma' },
        response: String
    }]
});

module.exports = mongoose.model('User', userSchema);
