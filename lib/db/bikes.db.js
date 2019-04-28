const knex = require('./connection');
const { toSnakeCaseQuery } = require('../utilities/helpers');

const getAllBikes = () => knex('bikes').select('*');

const addNewBike = (licenseNumber, color, type, owner, date, description) => knex('bikes').insert(
  toSnakeCaseQuery({
    licenseNumber,
    color,
    type,
    owner,
    date,
    description,
  }),
);

module.exports = {
  getAllBikes,
  addNewBike,
};
