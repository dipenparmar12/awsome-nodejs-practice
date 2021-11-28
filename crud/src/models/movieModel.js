const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
// movie = _id, title, desc, year, rating[1-10], genres[]

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    minlength: 2,
    maxlength: [100, 'Length should not be greater then 100 char'],
  },
  genres: [{ type: String }],
  year: {
    type: Number,
    required: [true, 'Year required'],
  },
  rating: {
    type: Number,
    validate(val) {
      if (val < 0 || val > 10) {
        throw new Error(`Invalid rating: ${val}`);
      }
    },
  },
  desc: String,
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
movieSchema.plugin(paginate);
movieSchema.plugin(toJSON);

module.exports.Movie = mongoose.model('Movie', movieSchema);
