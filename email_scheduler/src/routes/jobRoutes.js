const express = require('express');
const emailController = require('../controllers/emailController');
const { Job: JobModel } = require('../models/jobModel');
const { validator } = require('../services/joiValidationService');
const { createEmailValidateSchema, updateEmailValidateSchema, idExists } = require('../validators/emailValidators');

const route = express.Router();

route.get('/mails', emailController.getEmailSchedules);
route.post('/mails', validator(createEmailValidateSchema), emailController.createEmailSchedule);
route.patch('/mails/:id', validator(updateEmailValidateSchema), emailController.updateEmailScheduleById);
route.get('/mails/:id', idExists(JobModel), emailController.getEmailScheduleById);
route.delete('/mails/:id', idExists(JobModel), emailController.deleteEmailScheduleById);

// route.get('/notification', notificationController.getNotifications);
// route.post('/notification', notificationController.createNotification);
// route.get('/notification/:id', notificationController.getNotificationById);
// route.patch('/notification/:id', notificationController.updateNotificationById);
// route.delete('/notification/:id', notificationController.deleteNotificationById);

module.exports = route;
// // ApiRoot http://localhost:3000/api/schedule
