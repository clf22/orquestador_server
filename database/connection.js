const { Sequelize } = require('sequelize');
const { join } = require('path');
const { readdirSync } = require('fs');

// crear instancia de sequelize con la conexión a la base de datos
const sequelize = new Sequelize('orquestador', 'adminRPA', 'Linux1000', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false,
  define: {
    timestamps: true,
    schema: 'dev',
  },
});

// cargar los modelos
const models = {};

const normalizedPath = join(__dirname, './models');
readdirSync(normalizedPath)
  // .filter((file) => file !== 'connection.js')
  .forEach((file) => {
    const model = (require(`./models/${file}`)(sequelize, Sequelize.DataTypes))
    models[model.name] = model;
  });

// sincronizar los modelos con la base de datos
sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos conectada y modelos sincronizados');
});

module.exports = { sequelize, models };
