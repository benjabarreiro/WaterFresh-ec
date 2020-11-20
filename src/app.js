// Express
const express = require('express');
const app = express();

// Modueles
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-Livereload');


// Statics and Configs
const publicDirectory = path.resolve(__dirname, '../public');

app.use(express.static(publicDirectory));


// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes Require
const mainRouter = require('./routes/routes');


// Routes Usage
app.use('/', mainRouter);

app.listen(3001, () => console.log('Server running in port 3000'));