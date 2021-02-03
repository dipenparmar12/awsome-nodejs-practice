const nodemailer = require('nodemailer');
const config = require('./config');
const logger = require('./logger');

const emailTransport = nodemailer.createTransport(config.email.smtp);

/* istanbul ignore next */
if (config.env !== 'test') {
  emailTransport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
}

module.exports = emailTransport;
