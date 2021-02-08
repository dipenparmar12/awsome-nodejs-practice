const express = require('express');
const jobRoutes = require('./jobRoutes');
const emailRoutes = require('./emailRoutes');
const jobController = require('../controllers/jobController');

const router = express.Router();

router.use('/schedule', jobRoutes);
router.use('/mails', emailRoutes);

// router.use('/fire', jobController.firePendingEmailJobs);

module.exports = router;
// http://localhost:3000/api/
