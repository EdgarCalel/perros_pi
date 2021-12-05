const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/perros',PerrosAll);
// Controllers
const { findAll, findId, CreateDog } = require('../controllers/perros.controller');
const { findDogTemperament } = require('../controllers/Temperament.controller');
// Routes
// router.get('/Perros', PerrobyApi);
// router.get('/PerrosBd', infoBD);
router.get('/dogs', findAll)
router.get('/dogss/:id', findId)
router.get('/temperaments', findDogTemperament)
router.post('/dogs', CreateDog)

module.exports = router;
