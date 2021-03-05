// Express
const express = require('express');
const app = express();

// Modules
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-Livereload');
const bodyparser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authCookieMiddleware = require('./middlewares/authCookieMiddleware');
const localsMiddleware = require('./middlewares/localsMiddleware');


// Statics and Configs
const publicDirectory = path.resolve(__dirname, '../public');

//Middlewares
const logMiddleware = require('./middlewares/logMiddleware');

app.use(logMiddleware);

app.use(express.static(publicDirectory));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({secret: 'secret'}));
app.use(cookieParser());
app.use(authCookieMiddleware);
app.use(localsMiddleware);


// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Routes Require
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const distributorsRouter = require('./routes/distributors');
const adminsRouter = require('./routes/admins');


// Routes Usage
app.use('/', productsRouter);
app.use('/users', usersRouter);
app.use('/distributors', distributorsRouter);
app.use('/admins', adminsRouter);

app.listen(process.env.PORT || 3000, '0.0.0.0', () => console.log('Server running in port 3000'));