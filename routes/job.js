const express = require('express');
const { sequelize, models } = require('../database/connection');

const router = express.Router();

// Ruta para obtener todos los trabajos
router.get('/', async (req, res) => {
  try {
    const jobs = await models.Jobs.findAll();
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;
