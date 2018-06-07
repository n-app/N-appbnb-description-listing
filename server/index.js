const express = require('express');
const db = require('../database/index');
const bodyParser = require('body-parser');
const homeRoutes = require('./homes');

//require('../aDataGenerator/dataGenerator');
const app = express();

app.use(bodyParser.json());

app.use(express.static('../public'));

app.use('/homes', homeRoutes);


/* app.post('/homes', (req, res) => {
     db.save(req.body, () => res.sendStatus(201));
   });
*/


// app.get('/homes', (req, res) => {
//   let data;
//   console.log('this is the request at the server->', req.body);
//   db.get(req.body.id, (query) => {
//   console.log('from the server app.get request ->', query);
//     data = JSON.stringify(query);
//     res.send(query);
//   });
// });


//db.get(1006, x => console.log(x));

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
