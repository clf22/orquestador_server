module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('permission', {
    companyId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    process: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: null
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    tableName: 'permission',
    timestamps: true,
    uniqueKeys: {
      unique_permission: {
        fields: ['companyId', 'userId']
      }
    }
  });

  Permission.associate = models => {
    Permission.belongsTo(models.company);
    Permission.belongsTo(models.user);
  };

  return Permission;
};
