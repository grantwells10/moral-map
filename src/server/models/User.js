const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    age: Number,
    gender: String,
    country: String,
    state: String,
    locationType: String,
    education: String,
    employmentStatus: String,
    religion: String,
    responses: [{
        dilemmaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dilemma' },
        response: String
    }],
    passedAttentionCheck: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', userSchema);
