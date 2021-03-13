const mongoose = require('mongoose');
// users = _id, name, gender, dob, bio, status, meta[created_at,created_by]

/// Types
const GENDER_MALE = 'male';
const GENDER_FEMALE = 'female';
const STATUS_ACTIVE = 1
const STATUS_INACTIVE = 0

const userTypes = {GENDER: [GENDER_MALE, GENDER_FEMALE], STATUS: [STATUS_ACTIVE, STATUS_INACTIVE]};

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  avatar: String,
  url: {
    profiles: [{
      website: String,
      url: String,
    }]
  },
  gender: {
    type: String,
    trim: true,
    required: true,
    enum: userTypes.GENDER,
    lowercase: true,
  },
  color: String,
  dob: {
    type: Date,
    default: null,
  },
  age: Number,
  //
  bio: String,
  address: mongoose.Schema.Types.Mixed,
  status: {
    type: Number,
    enum: userTypes.STATUS,
    default: STATUS_ACTIVE,
  },
  meta: {
    created_at: {type: Date, default: Date.now},
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
  // required: [true, '{} must be required for'],
});

module.exports.UserTypes = userTypes
module.exports.Job = mongoose.model('USER', userSchema);
