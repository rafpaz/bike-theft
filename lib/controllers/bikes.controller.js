const { bikesService } = require('../services');

const { createBikeCase, getAll } = bikesService;

const postBikeCase = async (req, res, next) => {
  const {
    licenseNumber,
    color,
    type,
    owner,
    date,
    description,
  } = req.body;
  try {
    await createBikeCase(
      // licenseNumber,
      // color,
      // type,
      // owner,
      // date,
      // description,
      '123',
      'test',
      'test',
      'name',
      new Date(),
      'description',
    );
    res.sendStatus(201);
    next();
  } catch (e) {
    res.sendStatus(500) && next(e);
  }
};

const getBikeCases = async (req, res, next) => {
  const result = await getAll();
  res.send(result);
  next();
};

module.exports = {
  postBikeCase,
  getBikeCases,
};
