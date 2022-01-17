const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// importaciones
const { findAll, findId, CreateDog, DogByName, deletePerro,ByTemperament,apiSantiago, createVideogames,apiSantiBd } = require('../controllers/perros.controller');
const { findDogTemperament, TemperamentoList, CreateTemperamento,pokemonTodo } = require('../controllers/Temperament.controller');
const { platfomrs,callRecipeApi }= require('../controllers/platfoms.js')
const Dog = require('../models/Dog');


// Routes
// perros
router.get('dogs', async (req, res) =>{})

router.get('/dogsV/:id', apiSantiBd)
router.post('/videogame',createVideogames )

router.get('/dogsName/:name', DogByName)
router.get('/dogsi/:id', findId)
router.post('/dogs', CreateDog)

// Temperamentos
router.get('/temperaments', findDogTemperament)
router.get('/receta', callRecipeApi)
router.get('/temperamentos', TemperamentoList)
router.get('/temperamentoFilter', ByTemperament)
router.get('/temperamentCreate', CreateTemperamento)
router.delete('/dogs/:namedelete', deletePerro)

router.get('/pokemon/:id', pokemonTodo)

module.exports = router;
