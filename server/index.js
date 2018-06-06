const express = require('express');
const db = require('../database/index');
const bodyParser = require('body-parser');
require('../aDataGenerator/dataGenerator');

const app = express();

app.use(express.static(__dirname.concat('../public')));
app.use(bodyParser.json());

app.post('/homes', (req, res) => {
  db.save(homeData);
  res.sendStatus(201);
});

app.get('/homes', (req, res) => {
  let data;
  db.get((query) => {
    data = JSON.stringify(query);
    res.send(data);
  });
});

const port = 3001;

app.listen(port, () => console.log(`listening on port ${port}`));
