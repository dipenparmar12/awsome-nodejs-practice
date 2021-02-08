const Joi = require('joi');
const logger = require('../config/logger');
const { JobStatus } = require('../models/jobModel');

exports.createEmailValidateSchema = Joi.object({
  to: Joi.string().email().required(),
  subject: Joi.string().required(),
  body: Joi.string().required(),
  schedule_at: Joi.date().required(),
  // schedule_at: Joi.date().timestamp('javascript').required(),
  type: Joi.string().default('mail_schedule').valid('mail_schedule'),
});

exports.updateEmailValidateSchema = Joi.object({
  to: Joi.string().email().required(),
  subject: Joi.string().required(),
  body: Joi.string().required(),
  schedule_at: Joi.date().required(),
  // schedule_at: Joi.date().timestamp('javascript').required(),
  type: Joi.string().default('mail_schedule').valid('mail_schedule'),
  status: Joi.string().valid(...Object.values(JobStatus)),
  fired_at: Joi.date(),
});

exports.idExists = (Model) => async (req, res, next) => {
  // logger.info(`emailValidators::idExists(), ${Model.toString()}`);
  // TODO:::Resource exists
  // const found = Model.findById(req.param.id);
  // if (!found) {
  //   next('Resource not exits');
  // }
  next();
};
