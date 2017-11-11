const Sequelize = require('sequelize');

// Conectando com o banco
const instance = new Sequelize('minicursosequelize', 'root', 'root', {
  host: "localhost",
  dialect: "mysql",
});

// Criando uma model
const Task = instance.define('task', {
  id: {
    type: Sequelize.INTEGER(8).UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(45),
    allowNull: false,
    unique: true
  }
});

// Sincronizando banco
instance.sync({force : true}).done(() => {
  console.log('Banco sincronizado');
})
