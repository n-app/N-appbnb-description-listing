const express = require('express');
const db = require('../database/index');
const bodyParser = require('body-parser');
const homeRoutes = require('./homes');

const app = express();

app.use(bodyParser.json());

app.use(express.static('../public'));

app.use('/homes', homeRoutes);

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
