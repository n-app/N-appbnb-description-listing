const express = require('express');
const bodyParser = require('body-parser');
const roomsRoutes = require('./Rooms');

const app = express();

app.use(bodyParser.json());

app.use(express.static('../public'));

app.use('/rooms', roomsRoutes);

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
