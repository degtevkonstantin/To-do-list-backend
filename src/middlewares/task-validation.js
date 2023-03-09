const { check } = require('express-validator');
const { validatorResult } = require('./validation-result');
const validationText = [
  check('text')
    .isString()
    .trim()
    .notEmpty(),
  validatorResult
];

const validationCheckbox = [
  check('isCheck')
    .isBoolean()
    .trim()
    .notEmpty(),
  validatorResult
];


module.exports = {
  validationText,
  validationCheckbox
};
