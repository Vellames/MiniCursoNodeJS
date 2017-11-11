module.exports = {
  application: {
    port: 3000,
    sequelizeForce: true,
  },
  database: {
    dev: {
      database: "minicurso",
      username: "root",
      password: "root",
      params: {
        logging: true,
        host: "localhost",
        dialect: "mysql",
        define: {
            underscored: true
        }
      }
    }
  }
}