const httpStatus = require('http-status');
const movieService = require('../services/movieService');
const imdbService = require('../services/imdbService');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
// const ApiError = require('../utils/ApiError');

exports.getMovies = catchAsync(async (req, res) => {
  const filters = pick(req.query, ['title', 'genres', 'year', 'year_between', 'rating', 'rating_between']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);

  if (filters.rating_between) {
    const [start, end] = filters.rating_between.split('-');
    delete filters.rating_between;
    Object.assign(filters, { rating: { $gte: start, $lt: end } });
  }

  if (filters.year_between) {
    const [start, end] = filters.year_between.split('-');
    delete filters.year_between;
    Object.assign(filters, { year: { $gte: start, $lt: end } });
  }

  // return res.json(filters);

  let data = await movieService.queryMovies(filters, options);

  if (data.totalResults <= 0 && filters.title) {
    await imdbService.fetchMovieFromImdb(filters.title);
    data = await movieService.queryMovies(filters, options);
  }

  res.json({
    message: 'Movies',
    success: true,
    statusCode: httpStatus.OK,
    data,
    meta: {},
  });
});

exports.createMovie = catchAsync(async (req, res) => {
  const movie = await movieService.createMovie(req.body);
  res.json({
    message: 'Request processed successfully',
    success: true,
    statusCode: httpStatus.CREATED,
    data: movie,
    meta: {},
  });
});

exports.getMovieById = catchAsync(async (req, res) => {
  const result = await movieService.getMovieById(req.params.movieId);

  res.json({
    message: 'Request processed successfully',
    success: true,
    statusCode: httpStatus.CREATED,
    data: result,
    meta: {},
  });
});

exports.updateMovieById = catchAsync(async (req, res) => {
  /// Todo::updateMovieById_validation
  // const isValid = true

  const updateBody = pick(req.body, ['rating', 'genres']);
  const result = await movieService.updateMovieById(req.params.movieId, updateBody);

  res.json({
    message: 'Request processed successfully',
    success: true,
    statusCode: httpStatus.ACCEPTED,
    data: result,
    meta: {},
  });
});

exports.deleteMovieById = catchAsync(async (req, res) => {
  /// Todo::deleteMovieById_validation
  // const isValid = true
  const result = await movieService.deleteMovieById(req.params.movieId);
  res.json({
    message: 'Request processed successfully',
    success: true,
    // statusCode: httpStatus.ACCEPTED,
    statusCode: httpStatus.NO_CONTENT,
    data: result,
    meta: {},
  });
});

exports.truncate = catchAsync(async (req, res) => {
  const result = await movieService.moviesTruncate();
  res.json({
    message: 'All movies removed',
    success: true,
    statusCode: httpStatus.NO_CONTENT,
    data: result,
    meta: {},
  });
});
