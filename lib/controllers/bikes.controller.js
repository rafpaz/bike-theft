'use strict';

const wrapPromiseHandler = require('../utilities/helpers');
const { createBikeCase } = require('../services');

const postBikeCase = async (req, res, next) => {
  const {
    licenseNumber,
    color,
    type,
    owner,
    date,
    description,
  } = req.body;
  wrapPromiseHandler(() => );
  await createBikeCase(
      licenseNumber,
      color,
      type,
      owner,
      date,
      description,
    );
};

module.exports = {
  postBikeCase,
};
