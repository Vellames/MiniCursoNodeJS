module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    'tableName' : 'user'
  });

  User.associate = (models) => {
    User.hasMany(models.Category);
    User.hasMany(models.Movement);
  };

  return User;
}