const catchAsync = require('../utils/catchAsync');
const jobService = require('../services/jobService');
const emailService = require('../services/emailService');
const logger = require('../config/logger');
const { JobStatus } = require('../models/jobModel');

exports.firePendingEmailJobs = catchAsync(async (req = null, res = null) => {
  try {
    const emailJobs = await jobService.getPendingEmailJobs((e, jobs) => {
      if (jobs) {
        jobs.forEach(async (job) => {
          if (job.payload) {
            const updateJob = {
              status: JobStatus.SUCCESSFUL,
              attempts: job.attempts + 1,
              recent_attempt_at: new Date(),
              fired_at: new Date(),
              payload: job.payload,
            };
            const { to, subject, body: text } = job.payload;
            const response = await emailService.sendEmail(to, subject, text);
            if (response) {
              await jobService.updateJobById(job.id, updateJob);
            }
          }
        });
      }
    });
    logger.verbose(emailJobs);
    if (req) return res.json(emailJobs);
  } catch (e) {
    logger.error(e);
    throw new Error(e);
  }
});
