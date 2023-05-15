const express = require('express');
const userCtrl = require('../controllers/user.controller')

const router = express.Router();

// Ruta para obtener todos los trabajos
router.post('/', userCtrl.create);
router.patch('/:id', userCtrl.update);
router.get('/header', userCtrl.getHeaders);
router.get('/:id?', userCtrl.get);

module.exports = router;
