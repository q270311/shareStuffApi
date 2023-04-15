const { json } = require('express');
const express = require('express');
const router = express.Router();
const connection = require('../dboperation');

/* GET home page. */
router.get('/api', (req, res, next) => {
  res.render('index', { title: 'Share Stuff API' });
});

/* Select All Stuff */
router.get("/api/stuff", (req, res, next) => {
  connection.selectAllStuff().then((result) => {
    res.json(result[0]);
  });
});

/* Select Stuff by id */
router.get("/api/stuff/:id", (req, res, next) => {
  connection.selectStuff(req.params.id).then((result) => {
    res.json(result[0]);
  });
});

/* Select reservations by sruff id */
router.get("/api/reservations/:id", (req, res, next) => {
  connection.selectReservations(req.params.id).then((result) => {
    res.json(result[0]);
  });
});

/* Select reservations2 by sruff id */
router.get("/api/reservations2/:id", (req, res, next) => {
  connection.selectReservations2(req.params.id).then((result) => {
    res.json(result[0]);
  });
});

/* insert Stuff */
router.post("/api/stuff", (req, res, next) => {  
  const sutff = { ...req.body }
  connection.addStuff(sutff).then((result) => {
    res.status(201).json(result);
  });  
});

module.exports = router;
