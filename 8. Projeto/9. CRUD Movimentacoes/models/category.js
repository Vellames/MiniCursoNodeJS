module.exports = (sequelie, DataTypes) => {
  const Category = sequelie.define('Category', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'category'
  });

  Category.associate = (models) => {
    Category.belongsTo(models.User, { foreignKey: { allowNull : false } });
    Category.hasMany(models.Movement);
  }

  return Category
}