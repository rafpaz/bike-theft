const { Pool } = require('pg');

const knex = require('knex')({
  client: 'postgresql',
  connection: {
    debug: 'true',
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
  }
});

const initDB = () => {
  knex.schema.hasTable('bike').then((exists) => {
    console.log('######### Exist = ', exists);
    if (!exists) {
      return knex.schema.createTable('bike', (t) => {
        t.string('license_number', 30);
        t.string('color', 30);
        t.string('type', 30);
        t.string('owner', 100);
        t.date('date');
        t.string('description', 500);
      });
    }
  });
};

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

const insert = (request, response) =>
  knex('bike').insert({
    license_number: 'ABC123',
    color: 'black',
    type: 'road',
    owner: 'rafael',
    date: new Date(),
    description: 'desc',
  }).then((result) => {
    response.status(200).send('Added succesfully');
  });


const bla = (request, response) => {
  return knex.select().from('bike').then((result) => {
    response.status(200).json(result);
  });
};

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { name, email } = request.body;

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`User added with ID: ${results.insertId}`);
  });
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    },
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  bla,
  initDB,
  insert,
};
