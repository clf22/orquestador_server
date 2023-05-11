module.exports = (sequelize, DataTypes) => {
  const Process = sequelize.define('process', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    idBusiness: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'business',
        key: 'id'
      },
    }
  }, {
    tableName: 'process',
    timestamps: true,
  });

  Process.belongsTo(sequelize.models.business, { foreignKey: 'idBusiness' });

  return Process;
}
