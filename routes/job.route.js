const express = require('express');
const jobCtrl = require('../controllers/job.controller')

const router = express.Router();

// Ruta para obtener todos los trabajos
router.post('/', jobCtrl.create);
router.patch('/:id', jobCtrl.update);
router.get('/:id?', jobCtrl.get);
router.patch('/kill/:id', jobCtrl.stop);

module.exports = router;
