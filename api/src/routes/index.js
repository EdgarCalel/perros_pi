const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// importaciones
const { findAll, findId, CreateDog, DogByName, filterTemperament, deletePerro, CrearReceta } = require('../controllers/perros.controller');
const { findDogTemperament, TemperamentoList, CreateTemperamento, ByTemperament } = require('../controllers/Temperament.controller');
const { platfomrs,callRecipeApi }= require('../controllers/platfoms.js')
const Dog = require('../models/Dog');

// Routes
// perros
router.get('dogs', async (req, res) =>{})

router.get('/dogs', findAll)
router.get('/dogsName/:name', DogByName)
router.get('/dogsi/:id', findId)
router.post('/dogs', CreateDog)

// Temperamentos
router.get('/temperaments', findDogTemperament)
router.get('/receta', callRecipeApi)
router.get('/temperamentos', TemperamentoList)
router.get('/temperamentoFilter/', filterTemperament)
router.get('/temperamentCreate', CreateTemperamento)
router.delete('/dogs/:namedelete', deletePerro)
router.post('/RecetaCreate', CrearReceta)

//router.get('/platfomrs', platfomrs)

module.exports = router;
