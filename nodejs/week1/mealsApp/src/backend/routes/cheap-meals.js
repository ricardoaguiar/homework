const express = require('express');

const router = express.Router();

const meals = require('./../../data/meals.json');

router.get('/cheap-meals', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.json(
    meals.filter(meal => {
      return meal.price < 40;
    })
  );
});

module.exports = router;
