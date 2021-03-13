const generateParagraph = require('../utils/generateParagraph');
const logger = require('../config/logger');
const { Job, JobTypes, JobStatus } = require('../models/jobModel');
const removeUndefined = require('../utils/removeUndefined');

exports.queryJobs = async (filter = {}, options = {}) => {
  try {
    return Job.paginate(filter, options);
  } catch (e) {
    logger.error(e);
    return `error ${e}`;
  }
};

exports.createJob = async (reqBody) => {
  try {
    const { type, schedule_at, status, fired_at, payload, desc, ...rest } = reqBody;
    const jobBody = {
      type,
      schedule_at,
      desc: desc || generateParagraph(),
      payload: { ...payload, ...rest },
      // status, fired_at,
    };
    return Job.create(jobBody);
  } catch (e) {
    logger.error(e);
    return `error ${e}`;
  }
};

exports.updateJobById = async (id, reqBody) => {
  try {
    // console.log('jobService reqBody::', reqBody);
    const { type, schedule_at, status, desc, attempts, meta, recent_attempt_at, fired_at, payload, ...rest } = reqBody;
    const jobBody = {
      type,
      schedule_at,
      status,
      attempts,
      meta,
      recent_attempt_at,
      fired_at,
      desc: desc || generateParagraph(),
      payload: { ...payload, ...rest },
    };
    // return jobBody;
    return Job.findByIdAndUpdate(id, { $set: removeUndefined(jobBody) }).then((result) => {
      return result;
    });
  } catch (e) {
    logger.error(e);
    throw new Error(e);
    // return `error ${e}`;
  }
};

exports.getJobById = async (jobId) => {
  try {
    return Job.findById(jobId);
  } catch (e) {
    logger.error(e);
    return `error ${e}`;
  }
};

exports.deleteJobById = async (jobId) => {
  try {
    return Job.findById(jobId).deleteOne();
  } catch (e) {
    logger.error(e);
    return `error ${e}`;
  }
};

exports.getPendingEmailJobs = async (fn) => {
  try {
    const filter = {
      type: JobTypes.EMAIL_SCHEDULE,
      status: JobStatus.PENDING,
      schedule_at: {
        $lte: new Date(),
        // $lte: new Date(req.query.date),
      },
    };
    // console.log('jobService filter::', filter);
    const emailJobs = await Job.find(filter, fn);
    return emailJobs || [];
  } catch (e) {
    logger.error(e);
    return `error ${e}`;
  }
};

exports.jobsTruncate = async () => {
  try {
    return Job.deleteMany();
  } catch (e) {
    logger.error(e);
    return `error ${e}`;
  }
};

/// get past jobs
// db.jobs.find({
//     schedule_at: { $lte: new Date() }
// })
//     .projection({ _id: 0, status: 1, payload: 1, type: 1, firde_at: 1, schedule_at: 1 })
//     .sort({ schedule_at: -1 })
//     .limit(10)

// // Insert doc
// db.getCollection("jobs").insert([
//   {
//     "attempts": 0,
//     "recent_attempt_at": null,
//     "status": "failed",
//     "desc": "Email scheduled: Average Courage Happy",
//     "type": "mail_schedule",
//     "schedule_at": "2021-02-07T08:20:59.000Z",
//     "payload": {
//       "to": "testing@test.com",
//       "subject": "TestMail Scheduled (mail_schedule)",
//       "body": "Simple text inside body (mail_schedule)"
//     },
//   }
// ])
