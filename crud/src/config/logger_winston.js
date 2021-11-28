const winston = require('winston');
const appRoot = require('app-root-path');
const config = require('./config');

const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    stderrLevels: ['error'],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
  },
  file: {
    level: 'info',
    filename: `${appRoot}/logs/${new Date().toISOString().slice(0, 10)}.log`, // Date=YYYY-MM-DD
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 30,
    colorize: false,
    format: winston.format.combine(
      winston.format.uncolorize(),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
  },
};

const logger = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',
  transports: [new winston.transports.Console(options.console), new winston.transports.File(options.file)],
});

module.exports = logger;
// module.exports = logger.info;

/// Usage example
// logger.info('Log: info');
// logger.warn('Log: warn');
// logger.debug('Log: debug');
// logger.error('Log: error');

/// //
/// Old implementation
// const enumerateErrorFormat = winston.format((info) => {
//   if (info instanceof Error) {
//     Object.assign(info, { message: info.stack });
//   }
//   return info;
// });
//
// const logger = winston.createLogger({
//   level: config.env === 'development' ? 'debug' : 'info',
//   format: winston.format.combine(
//     enumerateErrorFormat(),
//     winston.format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
//   ),
//   transports: [new winston.transports.Console(options.console), new winston.transports.File(options.file)],
// });
