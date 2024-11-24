const mongoose = require('mongoose');

const DilemmaSchema = new mongoose.Schema({
    issue: String,
    question: String,
    options: [String]
});

module.exports = mongoose.model('Dilemma', DilemmaSchema);