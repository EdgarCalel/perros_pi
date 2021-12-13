const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// importaciones
const { findAll, findId, CreateDog, DogByName } = require('../controllers/perros.controller');
const { findDogTemperament } = require('../controllers/Temperament.controller');
const Dog = require('../models/Dog');

// Routes

// perros
router.get('dogs', async (req, res) =>{})


router.get('/dogs', findAll)
router.get('/dogs/:name', DogByName)
router.get('/dogsi/:id', findId)
router.post('/dogs', CreateDog)

// Temperamentos
router.get('/temperaments', findDogTemperament)

module.exports = router;
