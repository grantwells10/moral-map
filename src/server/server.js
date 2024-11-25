const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Routes
const dilemmaRoutes = require('./routes/dilemmas');
const userRoutes = require('./routes/users');

// Start xpress app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mount routes
app.use('/api/dilemmas', dilemmaRoutes);
app.use('/api/users', userRoutes);

// For render
app.use(express.static(path.join(__dirname, '../client/build')));

// Databse connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log('Connected to MongoDB', mongoose.connection.name)})
    .catch(err => console.error(err));

// Help render with routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Use Render's port or fallback to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});