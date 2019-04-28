exports.up = knex => knex.schema.createTable('officers', (t) => {
  t.increments();
  t.string('name', 100).notNullable();
  t.enu('status', ['available', 'busy']);
});

exports.down = knex => knex.schema.dropTable('officers');
