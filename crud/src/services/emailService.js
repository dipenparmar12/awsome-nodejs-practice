const emailTransport = require('../config/email');
const config = require('../config/config');

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @param res_boolean
 * @returns {Promise}
 */
// eslint-disable-next-line no-unused-vars
const sendEmail = async (to, subject, text, res_boolean = true) => {
  const msg = { from: config.email.from, to, subject, text };
  const mailResponse = await emailTransport.sendMail(msg);
  return res_boolean ? !!mailResponse.messageId : mailResponse;
};

module.exports = {
  emailTransport,
  sendEmail,
};

/// / Success mail response
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
