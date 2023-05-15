module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    type: {
      type: DataTypes.ENUM('trace', 'info', 'warning', 'error', 'critical'),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    log: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    idJob: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job',
        key: 'id'
      }
    }
  }, {
    tableName: 'log',
    timestamps: true
  });

  Log.associate = (models) => {
    Log.belongsTo(models.Job, {
      foreignKey: {
        name: 'idJob',
        allowNull: false
      }
    });
  };

  return Log;
};
