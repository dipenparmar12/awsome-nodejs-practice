const logger = require('./logger_winston');

module.exports = logger;
module.exports.mailLog = require('./logger_winston').mailLog; // append other functions as named export

/// Usage example
// logger.info('Log: info');
// logger.warn('Log: warn');
// logger.debug('Log: debug');
// logger.error('Log: error');
