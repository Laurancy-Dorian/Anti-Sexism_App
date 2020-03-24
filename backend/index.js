/**
 * Requires libraries
 */

var path = require('path')

/* Express and its middlewares */
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


/**
 * Saving in global
 */
/* Saves the root of the app in global */
global.appRoot = path.resolve(__dirname);

/* Saves config in global */
global.config = require('./config/config');

/* Creates pool and stores it in global so that all methods can access it */
global.pool = require('./db/initDB');



/**
 * Start express and the middlewares
 */
var app = express();

const cors = require('cors')
app.use(cors())
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


/* Static files */
app.use('/apidoc', express.static(path.join(__dirname, 'apidoc')));    // Api Documentation


/*  Loads the routes for all resources */
var routes = require('./routes');
app.use('/api', routes);


/* The 404 Route */
app.use('*', (req, res) => {
    res.status(404).send('404 not found');
});

app.listen(config.port)

module.exports = app;