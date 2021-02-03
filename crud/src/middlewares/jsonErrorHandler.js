/**
 * Create an object composed of the picked object properties
 */

// eslint-disable-next-line no-unused-vars
const jsonErrorHandler = async (error, req, res, next) => {
  res.status(500).send({
    error,
  });
  next();
};

module.exports = jsonErrorHandler;

// next 4th argument, needed the fourth argument even if it wasn't used for it to catch errors properly,

/// // Original snippet
// const bodyParser = require('body-parser')
// const express = require('express')
// const jsonErrorHandler = async (err, req, res, next) => {
//   res.status(500).send({ error: err });
// }
// const app = express()
// // The other middleware
// app.use(bodyParser.json())
// // Your handler
// app.use(jsonErrorHandler)
