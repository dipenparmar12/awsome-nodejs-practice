const express = require('express');
const emailController = require('../controllers/emailController');

const route = express.Router();

route.get('/test', emailController.testMail);

module.exports = route;
