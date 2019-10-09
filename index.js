const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const authRoute = require('./routes/auth');
const dashRoute = require('./routes/dashboard');

dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true},
    () => console.log('connected to db')
);

//Middleware
app.use(express.json());

// Router middlewares
app.use('/api/user', authRoute);
app.use('/api/dashboard', dashRoute);

app.listen(5000, () => console.log('Server up and running'));