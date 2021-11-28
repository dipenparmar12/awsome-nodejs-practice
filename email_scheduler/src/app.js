const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const config = require('./config/config');
// const logger = require('./config/logger');

const appRoutes = require('./routes');
const cronService = require('./services/cronService');
const jsonErrorHandler = require('./middlewares/jsonErrorHandler');

const app = express();

// if (config.env !== 'test') {
//   app.use(morgan.successHandler);
//   app.use(morgan.errorHandler);
// }

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// extended option allows to choose between parsing the URL-encoded data with the querystring library

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// parse json request body
app.use(express.json());

// api routes
app.use('/api', appRoutes);

// clear console on nodemon server start-up
if (config.console_clear) console.clear();

// enable CronJob service
if (config.start_cron) cronService.startCron();

/// set always JsonResponse (middleware)
if (config.force_json_response) app.use(jsonErrorHandler);

module.exports = app;
