const { format } = require('date-fns');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const emailService = require('../services/emailService');
const config = require('../config');
const jobService = require('../services/jobService');
const logger = require('../config/logger');
const { JobStatus } = require('../models/jobModel');

exports.test = catchAsync(async (req, res) => {
  //
  const emailJobs = await jobService.getPendingJobs((e, jobs) => {
    if (jobs) {
      jobs.forEach(async (job) => {
        if (job.payload) {
          const updateJob = {
            ...job.toJSON(),
            status: JobStatus.SUCCESSFUL,
            attempts: job.attempts + 1,
            recent_attempt_at: new Date(),
            payload: job.payload,
          };
          // jobService.updateJobById(job.id, updateJob);

          const { to, subject, body } = job.payload;
          const response = await emailService.sendEmail(to, subject, body);
          if (response) {
            jobService.updateJobById(job.id, updateJob);
          }
        }
      });
    }
  });
  res.send(emailJobs);
});

exports.getEmailSchedules = catchAsync(async (req, res) => {
  const filters = pick(req.query, ['status', 'type']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);

  const emailJobs = await jobService.queryJobs(filters, options);
  res.json({
    url: req.baseUrl,
    massage: 'Scheduled emails',
    success: true,
    statusCode: httpStatus.OK,
    data: emailJobs,
  });
});

exports.createEmailSchedule = catchAsync(async (req, res) => {
  let mailPayload = pick(req.body, ['type', 'to', 'subject', 'body', 'date_time']);
  mailPayload = Object.assign(mailPayload, { subject: mailPayload.subject + new Date(), fire_at: mailPayload.date_time });
  delete mailPayload.date_time;

  const result = await jobService.createJob(mailPayload);

  res.json({
    url: req.baseUrl,
    massage: 'email scheduled successfully',
    success: true,
    statusCode: httpStatus.CREATED,
    result,
  });
});

exports.updateEmailScheduleById = catchAsync(async (req, res) => {
  let updatePayload = pick(req.body, ['type', 'to', 'subject', 'body', 'date_time', 'status', 'test']);
  if (updatePayload.date_time) {
    updatePayload = Object.assign(updatePayload, { fire_at: updatePayload.date_time });
    delete updatePayload.date_time;
  }

  await jobService.updateJobById(req.params.id, updatePayload);
  res.json({
    message: 'Request processed successfully',
    success: true,
    statusCode: httpStatus.ACCEPTED,
    // data: result, /// TODO::IMP await error (getting old results)
  });
});

exports.getEmailScheduleById = catchAsync(async (req, res) => {
  const result = await jobService.getJobById(req.params.id);
  res.json({
    message: 'Request processed successfully',
    success: true,
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

exports.deleteEmailScheduleById = catchAsync(async (req, res) => {
  const { id } = pick(req.params, ['id']);
  const result = await jobService.deleteJobById(id);
  res.json({
    message: 'Request processed successfully',
    success: true,
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

exports.fireScheduledMails = async () => {};

exports.testMail = catchAsync(async (req, res) => {
  const to = 'dipensavji@gmail.com';
  const subject = `Node test mail at: ${format(new Date(), config.date_format)}`;
  const bodyText = 'Simple mail body';

  logger.warn(`Email sent requested`);
  emailService.sendEmail(to, subject, bodyText).then((e) => {
    logger.debug(`Email sent: ${e}`);
  });

  res.json({
    url: req.baseUrl,
    massage: 'email sent successfully',
  });
});
