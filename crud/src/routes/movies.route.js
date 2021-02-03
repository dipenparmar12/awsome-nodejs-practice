const express = require('express');
const movieController = require('../controllers/movie.controller');

const routes = express.Router();

routes.get('/', movieController.getMovies);
routes.post('/', movieController.createMovie);
routes.get('/:movieId', movieController.getMovieById);
routes.patch('/:movieId?', movieController.updateMovieById);
routes.delete('/:movieId?', movieController.deleteMovieById);

routes.post('/truncate', movieController.truncate);

module.exports = routes;
