module.exports = (sequelize, DataTypes) => {
  const Process = sequelize.define('process', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    idSocket: {
      type: DataTypes.STRING,
      allowNull: true
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    idCompany: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      },
    }
  }, {
    tableName: 'process',
    timestamps: true,
  });

  Process.belongsTo(sequelize.models.company, { foreignKey: 'idCompany' });

  return Process;
}
