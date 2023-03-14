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

/* Select Stuff */
router.get("/api/stuff/:id", (req, res, next) => {
  connection.selectStuff(req.params.id).then((result) => {
    res.json(result[0]);
  });
});

module.exports = router;
