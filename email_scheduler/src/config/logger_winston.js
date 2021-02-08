const winston = require('winston');
const { format } = require('winston');
const appRoot = require('app-root-path');
const config = require('./config');

const printf = (info) => {
  // console.log('logger_winston info::', info);
  if (typeof info.message === 'object') {
    // eslint-disable-next-line no-param-reassign
    info.message = JSON.stringify(info.message, null, 3);
  }
  return `[${info.timestamp}] level.${info.level}:: ${info.message}`;
};

const options = {
  console: {
    // level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    stderrLevels: ['error'],
    format: format.combine(
      format.prettyPrint(),
      format.splat(),
      format.colorize(),
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.printf(printf)
      // format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
  },
  file: {
    // level: 'info',
    filename: `${appRoot}/logs/${new Date().toISOString().slice(0, 10)}.log`, // Date=YYYY-MM-DD
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 30,
    colorize: false,
    format: format.combine(
      format.prettyPrint(),
      format.splat(),
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.printf(printf)
      // format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
    ),
  },
  email: {
    // level: 'info',
    filename: `${appRoot}/logs/mail/mail-${new Date().toISOString().slice(0, 10)}.log`, // Date=YYYY-MM-DD
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 365,
    colorize: false,
    format: format.combine(
      format.prettyPrint(),
      format.splat(),
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.printf(printf)
    ),
  },
};

const logger = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',
  transports: [new winston.transports.Console(options.console), new winston.transports.File(options.file)],
});

const mailLog = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',
  transports: [new winston.transports.File(options.email)],
});

module.exports = logger;
module.exports.mailLog = mailLog;

/// Usage example
// logger.info('Log: info');
// logger.warn('Log: warn');
// logger.debug('Log: debug');
// logger.error('Log: error');

// {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   silly: 6
// }
