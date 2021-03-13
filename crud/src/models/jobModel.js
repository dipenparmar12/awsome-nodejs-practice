const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
// jobs = _id, type, payload, attempts, is_completed, created_at

/// Types
const EMAIL_SCHEDULE = 'mail_schedule';
const NOTIFICATION = 'notification';

/// Status
const PENDING = 'pending';
const SUCCESSFUL = 'successful';
const FAILED = 'failed';

const jobSchema = mongoose.Schema({
  type: {
    type: String,
    trim: true,
    // required: true,
    enum: [EMAIL_SCHEDULE, NOTIFICATION],
    lowercase: true,
  },
  payload: {
    required: true,
    // type: MailBody,
    type: mongoose.Schema.Types.Mixed,
  },
  attempts: {
    type: Number,
    default: 0,
  },
  recent_attempt_at: {
    type: Date,
    default: null,
  },
  status: {
    type: String,
    enum: [PENDING, SUCCESSFUL, FAILED],
    default: PENDING,
    lowercase: true,
  },
  fire_at: {
    type: Date,
    // required: [true, 'Date time must be required for JOB (please provide "fire_at" property)'],
  },
  //
  desc: String,
  meta: {
    created_at: { type: Date, default: Date.now },
    created_by: mongoose.Schema.Types.Mixed,
  },
  /// DataTypes
  // enum: ["male", "female"],
  // enum: Object.values(yourObject)
  // comments: [{ body: String, date: Date }],
  // date: { type: Date, default: Date.now },
  // hidden: Boolean,
  // meta: {
  //   votes: Number,
  //   fans:  Number
  // }
});

// add plugin that converts mongoose to json
jobSchema.plugin(paginate);
jobSchema.plugin(toJSON);

module.exports.JobTypes = { EMAIL_SCHEDULE, NOTIFICATION };
module.exports.JobStatus = { PENDING, SUCCESSFUL, FAILED };
module.exports.Job = mongoose.model('Job', jobSchema);
