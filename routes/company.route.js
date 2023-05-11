const express = require('express');
const companyCtrl = require('../controllers/company.controller')

const router = express.Router();

// Ruta para obtener todos los trabajos
router.post('/', companyCtrl.create);
router.patch('/:id', companyCtrl.update);
router.get('/:id?', companyCtrl.get);

module.exports = router;
