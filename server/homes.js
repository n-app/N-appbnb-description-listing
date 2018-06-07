const express = require('express');
const db = require('../database/index');

const router = express.Router();


router.get('/:id', (req, res, next) => {
  //console.log('the params ->', req.params.id);
  db.get(req.params.id, (query) => {
    console.log('req.params.id->',req.params.id,'from the server app.get request ->', query);
    data = JSON.stringify(query);
    res.send(query);
  });
});

/**
router.get('/:homeId', (req, res, next) => {
  const id = req.params.homeId;
  console.log('this is the id from the request-->', id);

  db.get(id, (query) => {
    console.log('from the server app.get request ->', query);
    data = JSON.stringify(query);
    res.send(query);
  });


  if (id > 999 && id < 1100) {
    res.status(200).json({
      message: `this is a new message and you asked for house# ${id}`,
    });
  } else {
    res.status(404).json({
      message: 'Does not exist',
    });
  }
  */
//});


module.exports = router;
