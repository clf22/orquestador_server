const express = require('express');
const rolCtrl = require('../controllers/rol.controller')

const router = express.Router();

// Ruta para obtener todos los trabajos
router.post('/', rolCtrl.create);
router.patch('/:id', rolCtrl.update);
router.get('/:id?', rolCtrl.get);

module.exports = router;
