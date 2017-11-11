module.exports = {
  application: {
    port: 3000,
    sequelizeForce: false,
  },
  session: {
    secret: '@%OGONDWOJ)@%I)@%I63ggbiefbgi@#%T#6',
    maxAge: 60000
  },
  bcrypt: {
    salts: 10,
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