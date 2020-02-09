'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./router/users');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
   console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Failed to connect to database ' + config.database);
});

const app = express();
app.use(express.static(path.join(__dirname,"../static")));

app.use(cors());

app.use(bodyParser.json());

app.use('/users', users);

// app.use(express.static('static'));
// app.use(bodyParser.json());


app.listen(3000, function () {
  console.log("App start on port 3000");
});