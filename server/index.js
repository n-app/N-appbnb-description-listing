const express = require('express');
const bodyParser = require('body-parser');
const roomsRoutes = require('./Rooms');

const app = express();

app.use(bodyParser.json());

app.use(express.static('../public'));

app.get('/favicon.ico', (req, res) => res.status(204));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Mehods',
      'GET, POST, PUT, PATCH, DELETE',
    );
    return res.status(200).json({});
  }
  next();
});

app.use('/rooms', roomsRoutes);

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
