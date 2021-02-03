const cron = require('node-cron');
const { format } = require('date-fns');
const config = require('../config');
const logger = require('../config/logger');

const sec = '*/15';

exports.startCron = (cronSchedule = `${sec} * * * * *`) => {
  logger.info(`cronService:: cron is started.... ${format(new Date(), config.date_format)} `);
  if (cronSchedule) {
    // // Schedule tasks to be run on the server.
    cron.schedule(cronSchedule, async function () {
      logger.debug(`Cron: running a task every ${sec} sec: ${format(new Date(), config.date_format)}`);
    });
  }
};
