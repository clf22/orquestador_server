module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('job', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    config: {
      type: DataTypes.JSON,
      allowNull: false
    },
    idProcess: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'process',
        key: 'id'
      }
    }
  }, {
    tableName: 'job',
    timestamps: true,
  });

  Job.associate = (models) => {
    Job.belongsTo(models.process, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Job;
};
