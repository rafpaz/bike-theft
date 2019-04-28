const { bikesDB } = require('../db');

const { addNewBike, getAllBikes } = bikesDB;

const createBikeCase = async (licenseNumber, color, type, owner, date, description) => {
  const result = await addNewBike(licenseNumber, color, type, owner, date, description);
  return result;
};

const getAll = async () => {
  const result = await getAllBikes();
  return result;
};

module.exports = {
  createBikeCase,
  getAll,
};
