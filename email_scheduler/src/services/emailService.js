const nodemailer = require('nodemailer');
const config = require('../config');
const logger = require('../config/logger');
const { mailLog } = require('../config/logger');

const transport = nodemailer.createTransport(config.email.smtp);

/* istanbul ignore next */
if (config.env !== 'test') {
  transport
    .verify()
    .then(() => logger.info(`Connected to email server: ${config.email.smtp.host}`))
    .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
}

const sendEmail = async (to, subject, text, from = config.email.from) => {
  const mailResponse = await transport.sendMail({ from, to, subject, text }); //
  // eslint-disable-next-line no-unused-expressions
  !!mailResponse && mailLog.info({ to, subject, text, from });
  return !!mailResponse;
};

module.exports = {
  transport,
  sendEmail,
};

/// /// Success mail response [ethereal.email]
// {
//   "accepted": [
//   "t@t.com"
// ],
//   "rejected": [],
//   "envelopeTime": 711,
//   "messageTime": 662,
//   "messageSize": 278,
//   "response": "250 Accepted [STATUS=new MSGID=YA5aaOFZMAOseaSjYBlA5WL4zQjIm.VhAAABBlp.OMyOXSpc0j59GCuGKUY]",
//   "envelope": {
//   "from": "support@email-scheduler.com",
//     "to": [
//     "t@t.com"
//   ]
// },
//   "messageId": "<191654e3-7803-74f4-9f14-04ba328ff044@email-scheduler.com>"
// }
