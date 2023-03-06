const { check } = require('express-validator');
const { validatorResult } = require('./validation-result')

const validationText = [
  check('text') 
  // .validatorResult()
  .isString()
  .trim()
  .notEmpty()
  ];


module.exports = {
  validationText
};
