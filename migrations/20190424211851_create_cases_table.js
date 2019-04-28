exports.up = knex => knex.schema.createTable('cases', (t) => {
  t.increments();
  t.integer('bike_id').unsigned();
  t.foreign('bike_id').references('id').inTable('bikes');
  t.integer('officer_id').unsigned();
  t.foreign('officer_id').references('id').inTable('officers');
  t.enu('status', ['open', 'in-progress', 'closed']);
});

exports.down = knex => knex.schema.dropTable('cases');
