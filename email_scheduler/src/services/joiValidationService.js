const httpStatus = require('http-status');
const logger = require('../config/logger');

// schema options
const joiValidationOptions = {
  abortEarly: false, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true, // remove unknown props
};

exports.validator = (schema) => (req, res, next) => {
  /// //  validate request body against schema
  const { error, value } = schema.validate({ ...req.query, ...req.body, ...req.params }, joiValidationOptions);

  if (error) {
    const errorMassages = error.details.map((e) => e.message);
    // // on fail return comma separated errors.
    res.json({
      success: false,
      massage: 'Validation errors',
      statusCode: httpStatus.UNPROCESSABLE_ENTITY,
      errorMassages,
      data: value,
    });
    logger.debug(`ValidationError ${errorMassages}`);
    return next(`ValidationError ${errorMassages}`);
  }
  // on success replace req.body with validated value and trigger next middleware function
  // req.body = value;
  next();
};

// /// Custom validation
// exports.validate = (data, schema, responseJson = false) => {
//   /// //  validate request body against schema
//   const result = schema.validate(data, joiValidationOptions);
//   if (responseJson && result.error) {
//     const errorMassages = result.error.details.map((e) => e.message);
//     // // on fail return comma separated errors
//     return {
//       success: false,
//       massage: 'Validation errors',
//       statusCode: httpStatus.UNPROCESSABLE_ENTITY,
//       errorMassages,
//       data: result.value,
//     };
//   }
//   return result;
// };
