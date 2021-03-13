const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // // milliseconds - how long to keep records of requests in memory
  max: 30, // max number of recent connections during `window` milliseconds before sending a 429 response
  statusCode: 429, // 429 status = Too Many Requests (RFC 6585)
  skipSuccessfulRequests: true,
  message: 'Too many requests, please try again later.',
});

module.exports = {
  authLimiter,
};
