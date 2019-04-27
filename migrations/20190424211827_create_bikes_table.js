exports.up = knex => {
  return knex.schema.createTable('bikes', (t) => {
    t.increments();
    t.string('license_number', 100).notNullable();
    t.string('color', 100).notNullable();
    t.string('type', 100).notNullable();
    t.string('owner', 100).notNullable();
    t.date('date').defaultTo(knex.fn.now());
    t.text('description').notNullable();
    t.enu('status', ['open', 'in-progress', 'closed']);
  });
};

exports.down = knex => {
  return knex.schema.dropTable('bikes');
};
