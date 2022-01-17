const axios = require('axios')
const { Dog, Temperamento } = require('../db');
const { JoinApiBd } = require('./perros.controller')




function callRecipeApi(req, res, next) {
  try {
    const ho = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0384748908a84a209a541c316d236fe7&includeNutrition=true`);
const info = ho.data.results;
    res.json(info);

  } catch (error) {
    next(error);
  }
}
module.exports = {platfomrs,callRecipeApi }
