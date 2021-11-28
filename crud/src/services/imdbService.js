const imdb = require('imdb-api');
const movieService = require('./movieService');
const pick = require('../utils/pick');
const config = require('../config');

const imdbApi = new imdb.Client({ apiKey: config.imdb_api_key });

exports.fetchMovieFromImdb = async (name, InDepthInfo = false) => {
  if (!name) return false;
  const movieInDepthInfo = await imdbApi.get({ name });
  const movieInfo = pick(movieInDepthInfo, ['title', 'year', 'genres', 'rating', 'imdburl']);
  Object.assign(movieInfo, { genres: movieInfo.genres.split(', ') });
  await movieService.createMovie(movieInfo);
  return InDepthInfo ? movieInDepthInfo : movieInfo;
};

exports.getMoviesFromImdb = async () => {
  return imdbApi.get();
}; // usage Example
