const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');
const consoles = require('../development/consoles');

let server;

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.debug(`Connected to MongoDB`);
  server = app.listen(config.port, () => {
    console.log(`Listening to port: ${config.port}`);

    if (config.env === 'development') {
      Object.values(consoles()).forEach((fn) => fn());
    }
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.debug(`Listening to port: ${config.port}`);
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.info('SIGTERM received');
  if (server) {
    server.close();
  }
});

module.exports = server;
