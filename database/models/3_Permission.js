module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('permission', {
    businessId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'business',
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
        fields: ['businessId', 'userId']
      }
    }
  });

  Permission.associate = models => {
    Permission.belongsTo(models.business);
    Permission.belongsTo(models.user);
  };

  return Permission;
};
