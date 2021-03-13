const cron = require('node-cron');
const logger = require('../config/logger');
const jobController = require('../controllers/jobController');

exports.startCron = (cronSchedule = `*/10 * * * * *`) => {
  logger.info(`cronService started`);
  if (cronSchedule) {
    cron.schedule(cronSchedule, async function () {
      logger.debug(`Cron: running a task every 10 sec`);
      jobController.firePendingEmailJobs();
    });
  }
};
