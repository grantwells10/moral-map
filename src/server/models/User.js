const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
