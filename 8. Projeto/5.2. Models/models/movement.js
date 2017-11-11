module.exports = (sequelize, DataTypes) => {
  const Movement = sequelize.define('Movement', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    value: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['I', 'E']
    }
  }, {
    tableName: 'movement'
  });

  Movement.associate = (models) => {
    Movement.belongsTo(models.Category, { foreignKey: { allowNull : false } });
    Movement.belongsTo(models.User, { foreignKey: { allowNull : false } });
  }

  return Movement;
}