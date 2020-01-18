const express = require("express");

const router = express.Router();

const meals = require("./../../data/meals.json");

const reviews = require("./../../data/reviews.json");

meals.forEach(meal => {
  meal.reviews = reviews.filter(review => review.mealId === meal.id);
});

router.get("/meals", function(req, res) {
  res.json(meals);
});

module.exports = router;
