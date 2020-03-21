const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const meals = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../data', 'meals.json'), 'utf-8')
);
// console.log(meals);

const reviews = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../data', 'reviews.json'), 'utf-8')
);

meals.forEach(meal => {
  meal.reviews = reviews.filter(review => review.mealId === meal.id);
});

router.get('/meals', function(req, res) {
  res.send(meals);
});

module.exports = router;
