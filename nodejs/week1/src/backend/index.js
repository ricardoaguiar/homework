const express = require('express');
const app = express();
const meals = require('./../backend/routes/meals.js');
const reservations = require('./routes/reservations.js/index.js');
const cheapMeals = require('./../backend/routes/cheap-meals.js');
const largeMeals = require('./../backend/routes/large-meals.js');
const meal = require('./../backend/routes/meal.js');
const resrvation = require('./../backend/routes/resrvation.js');
