const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

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

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log('Connected to MongoDB', mongoose.connection.name)})
    .catch(err => console.error(err));

const PORT  = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
