const generateParagraph = require('../utils/generateParagraph');
const { Job, JobTypes, JobStatus } = require('../models/jobModel');

exports.queryJobs = async (filter = {}, options = {}) => {
  return Job.paginate(filter, options);
};

exports.createJob = async (objectBody) => {
  // eslint-disable-next-line camelcase
  const { fire_at, type, status, ...payload } = objectBody;
  const jobBody = {
    desc: `Email scheduled: ${generateParagraph()}`,
    type,
    fire_at,
    payload,
  };
  return Job.create(jobBody);
};

exports.updateJobById = async (id, reqBody) => {
  // console.log('jobService reqBody::', reqBody);
  const { fire_at, type, status, payload, ...rest } = reqBody;
  const jobBody = {
    desc: `Email scheduled: ${generateParagraph()}`,
    type,
    status,
    fire_at,
    payload,
    ...rest,
  };
  // console.log('jobService jobBody::', jobBody);
  return Job.findByIdAndUpdate(id, { $set: jobBody });
};

exports.getPendingJobs = async (fn) => {
  const filter = {
    type: JobTypes.EMAIL_SCHEDULE,
    status: JobStatus.PENDING,
    fire_at: {
      $lte: new Date(),
      // $lte: new Date(req.query.date),
      // $gte: new Date(req.query.date),
    },
  };
  const emailJobs = await Job.find(filter, fn);
  return emailJobs || [];
};

exports.getJobById = async (jobId) => {
  return Job.findById(jobId);
};
exports.deleteJobById = async (jobId) => {
  return Job.findById(jobId).deleteOne();
};
exports.jobsTruncate = async () => {
  return Job.deleteMany();
};
