const dotenv = require('dotenv');
const appRoot = require('app-root-path');

dotenv.config({ path: `${appRoot}/.env` });

module.exports = {
  env: process.env.NODE_ENV,
  app_log: process.env.APP_LOG,
  port: process.env.PORT,
  mongoose: {
    url: process.env.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
