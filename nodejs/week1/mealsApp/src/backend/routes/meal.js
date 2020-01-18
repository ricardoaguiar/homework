const express = require('express');

const router = express.Router();

const meals = require('../../data/meals.json');

router.get('/meal', function(req, res) {
  res.json(meals[Math.floor(Math.random() * meals.length)]);
});

module.exports = router;
