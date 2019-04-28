const knex = require('./connection');

const initDB = () => knex.schema.hasTable('bikes').then((exists) => {
  if (!exists) {
    return knex.schema.createTable('bikes', (t) => {
      t.string('license_number', 30);
      t.string('color', 30);
      t.string('type', 30);
      t.string('owner', 100);
      t.date('date');
      t.string('description', 500);
    });
  }
  return null;
});

module.exports = initDB;
