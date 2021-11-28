const express = require('express');
const jobRoutes = require('./jobRoutes');
const emailRoutes = require('./emailRoutes');

const router = express.Router();

router.use('/schedule', jobRoutes);
router.use('/email', emailRoutes);

module.exports = router;

/* istanbul ignore next */
// const config = require('../config/config');
// if (config.env === 'development') { router.use('/dev', devRouters); }
