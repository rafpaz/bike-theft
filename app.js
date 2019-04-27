const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('./lib/queries');

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is live'));

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);

app.get('/bla', db.bla);
app.post('/insert', db.insert);

db.initDB();

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
