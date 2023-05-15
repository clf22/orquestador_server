const express = require('express');
const processCtrl = require('../controllers/process.controller')

const router = express.Router();

// Ruta para obtener todos los trabajos
router.post('/', processCtrl.create);
router.patch('/:id', processCtrl.update);
router.get('/:id?', processCtrl.get);

module.exports = router;
