exports.up = knex => {
  return knex.schema.createTable('officers', (t) => {
    t.increments();
    t.string('name', 100).notNullable();
    t.enu('status', ['available', 'busy']);
  });
};

exports.down = knex => {
  return knex.schema.dropTable('officers');
};
