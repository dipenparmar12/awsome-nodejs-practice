const Joi = require('joi');
const { JobStatus } = require('../models/jobModel');

exports.createEmailValidateSchema = Joi.object({
  to: Joi.string().email().required(),
  subject: Joi.string().required(),
  body: Joi.string().required(),
  date_time: Joi.date().required(),
  // date_time: Joi.date().timestamp('javascript').required(),
  type: Joi.string().valid('mail_schedule').required(),
});

exports.updateEmailValidateSchema = Joi.object({
  to: Joi.string().email().required(),
  subject: Joi.string().required(),
  body: Joi.string().required(),
  date_time: Joi.date().required(),
  // date_time: Joi.date().timestamp('javascript').required(),
  type: Joi.string().valid('mail_schedule').required(),
  status: Joi.string()
    .valid(...Object.values(JobStatus))
    .required(),
});

exports.idExists = (Model) => async (req, res, next) => {
  console.log('emailValidators Model::', Model);
  // TODO:::Resource exists
  // const found = Model.findById(req.param.id);
  // if (!found) {
  //   next('Resource not exits');
  // }
  next();
};
