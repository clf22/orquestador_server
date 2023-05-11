const express = require('express');
const businessCtrl = require('../controllers/company.controller')

const router = express.Router();

// Ruta para obtener todos los trabajos
router.post('/', businessCtrl.create);
router.patch('/:id', businessCtrl.update);
router.get('/:id?', businessCtrl.get);

module.exports = router;
