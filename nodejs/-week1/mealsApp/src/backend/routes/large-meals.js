const express = require('express');

const router = express.Router();

const meals = require('./../../data/meals.json');

router.get('/large-meals', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.json(
    meals.filter(meal => {
      return meal.price > 50;
    })
  );
});

module.exports = router;
