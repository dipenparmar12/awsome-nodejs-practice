const httpStatus = require('http-status');
const { Movie } = require('../models/movieModel');
const ApiError = require('../utils/ApiError');
const objToLowerCase = require('../utils/objToLowerCase');

exports.queryMovies = async (filter = {}, options = {}) => {
  return Movie.paginate(objToLowerCase(filter), options);
};

exports.createMovie = async (movieBody) => {
  /// Todo::createMovie_validation
  return Movie.create(objToLowerCase(movieBody));
};

exports.getMovieById = async (movieId) => {
  return Movie.findById(movieId);
};

exports.updateMovieById = async (movieId, updateBody) => {
  const movie = await this.getMovieById(movieId);
  if (!movie) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Movie not found');
  }
  Object.assign(movie, objToLowerCase(updateBody));
  await movie.save();
  return movie;
};

exports.deleteMovieById = async (movieId) => {
  return Movie.findById(movieId).deleteOne();
};

exports.moviesTruncate = async () => {
  return Movie.deleteMany();
};

/// ///// Testing, Temp, Ref
// return imdb
//   .get({ name: filters.title }, { apiKey: config.imdb_api_key, timeout: 30000 })
//   .then((r) => {
//     return res.json({
//       message: 'Movie found!',
//       success: true,
//       statusCode: httpStatus.FOUND,
//       r,
//       meta: {},
//     });
//   })
//   .catch((e) => {
//     return res.json({
//       message: e.message || 'Data not found',
//       success: false,
//       statusCode: httpStatus.NOT_FOUND,
//       e,
//       meta: {},
//     });
//   });
