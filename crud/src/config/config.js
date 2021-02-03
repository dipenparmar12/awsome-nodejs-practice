const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

const appSettings = require('./appSettings');

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    APP_LOG: Joi.boolean().default(false),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),

    SMTP_HOST: Joi.string().required().description('server that will send the emails'),
    SMTP_PORT: Joi.number().required().description('port to connect to the email server'),
    SMTP_USERNAME: Joi.string().required().description('username for email server'),
    SMTP_PASSWORD: Joi.string().required().description('password for email server'),
    EMAIL_FROM: Joi.string().required().description('the from field in the emails sent by the app'),

    // JWT_SECRET: Joi.string().required().description('JWT secret key'),
    // JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
    // JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('days after which refresh tokens expire'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config data is not valid: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  app_log: envVars.APP_LOG,
  port: envVars.PORT,
  mongoose: {
    url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
  // jwt: {
  //   secret: envVars.JWT_SECRET,
  //   accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
  //   refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
  //   resetPasswordExpirationMinutes: 10,
  // },
  start_cron: appSettings.start_cron,
  only_json_response: appSettings.only_json_response,
  console_clear: appSettings.console_clear,
  date_format: appSettings.date_format,
};
