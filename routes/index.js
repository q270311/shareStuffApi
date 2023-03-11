const { json } = require('express');
const express = require('express');
const router = express.Router();
const connection = require('../dboperation');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Share Stuff API' });
});

/* Select All Stuff */
router.get("/stuff", (req, res, next) => {
  connection.selectAllStuff().then((result) => {
    res.json(result[0]);
  });
});

module.exports = router;
