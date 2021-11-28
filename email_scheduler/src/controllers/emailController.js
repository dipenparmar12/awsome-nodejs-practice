const { format } = require('date-fns');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const emailService = require('../services/emailService');
const config = require('../config');
const jobService = require('../services/jobService');

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
  const emailPayload = pick(req.body, ['type', 'to', 'subject', 'body', 'desc', 'schedule_at']);
  const result = await jobService.createJob(emailPayload);

  res.json({
    url: req.baseUrl,
    massage: 'email scheduled successfully',
    success: true,
    statusCode: httpStatus.CREATED,
    result,
  });
});

exports.deleteEmailScheduleById = catchAsync(async (req, res) => {
  const { id } = pick(req.params, ['id']);
  const result = await jobService.deleteJobById(id);

  if (result.deletedCount && result.deletedCount > 0) {
    return res.json({
      message: 'Request processed successfully',
      success: true,
      statusCode: httpStatus.CREATED,
      data: result,
    });
  }

  return res.json({
    message: 'Resource not found',
    success: false,
    statusCode: httpStatus.NOT_FOUND,
    data: { id },
  });
});

exports.updateEmailScheduleById = catchAsync(async (req, res) => {
  const updateBody = pick(req.body, ['type', 'to', 'subject', 'body', 'schedule_at', 'desc', 'fired_at', 'status']);
  const result = await jobService.updateJobById(req.params.id, updateBody);

  res.json({
    message: 'Request processed successfully',
    success: true,
    statusCode: httpStatus.ACCEPTED,
    data: { updateBody, result },
    // data: {},
  });
});

exports.getEmailScheduleById = catchAsync(async (req, res) => {
  const result = await jobService.getJobById(req.params.id);
  res.json({
    message: 'Request processed successfully',
    success: true,
    statusCode: httpStatus.OK,
    data: result,
  });
});

exports.truncateEmailSchedules = catchAsync(async (req, res) => {
  await jobService.jobsTruncate();
  res.json({
    message: 'Request processed successfully [truncate]',
    success: true,
    statusCode: httpStatus.NO_CONTENT,
    data: {},
  });
});

exports.testMail = catchAsync(async (req, res) => {
  const to = req.query.to ? req.query.to : 'dipen@mailsac.com';
  const subject = `Test from Nodejs: ${format(new Date(), config.date_format)}`;
  const text = `Mail body\nto:${to}`;
  await emailService.sendEmail(to, subject, text);
  res.json({
    url: req.baseUrl,
    massage: 'email sent successfully',
    data: { to, subject, text },
  });
});

// exports.startCron = catchAsync(async (req, res) => {
//   cronService.startCron();
//   res.json({
//     url: req.baseUrl,
//     massage: 'CronJob started',
//   });
// });
