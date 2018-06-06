const express = require('express');
const db = require('../database/index');
const bodyParser = require('body-parser');
require('../aDataGenerator/dataGenerator');

const app = express();

app.use(express.static(__dirname.concat('../public')));
app.use(bodyParser.json());

app.post('/homes', (req, res) => {
  db.save(req.body, () => res.sendStatus(201));
});

app.get('/homes', (req, res) => {
  let data;
  db.get(req.body, (query) => {
    data = JSON.stringify(query);
    res.send(data);
  });
});

db.get(x => console.log(x), 1099);

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
