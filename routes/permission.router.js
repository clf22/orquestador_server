const express = require('express');
const permissionCtrl = require('../controllers/permission.controller')

const router = express.Router();

// Ruta para obtener todos los trabajos
router.post('/', permissionCtrl.create);
router.patch('/:id', permissionCtrl.update);
router.get('/:id?', permissionCtrl.get);

module.exports = router;
