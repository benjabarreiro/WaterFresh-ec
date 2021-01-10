// Express
const express = require('express');
const app = express();

// Modueles
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-Livereload');
const bodyparser = require('body-parser');


// Statics and Configs
const publicDirectory = path.resolve(__dirname, '../public');

app.use(express.static(publicDirectory));
app.use(express.urlencoded({     // to support URL-encoded bodies
    extended: false
  }));


// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes Require
const mainRouter = require('./routes/routes');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const distributorsRouter = require('./routes/distributors');


// Routes Usage
app.use('/', productsRouter);
app.use('/users', usersRouter);
app.use('/distributors', distributorsRouter);
//app.use('/', mainRouter);

app.listen(3000, () => console.log('Server running in port 3000'));