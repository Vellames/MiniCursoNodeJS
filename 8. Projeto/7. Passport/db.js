/**
 * Database configuration and sequelize configuration
 */

// Load Sequelize Module
const Sequelize = require("sequelize");

// Load the database configuration
const config = require("./config").database;

// Load Path and FileSystem library
const path = require("path");
const fs = require("fs");

const environment = process.env.NODE_ENV.trim();
var sequelize = null;
module.exports = () => {
  // Singleton for instance of Sequelize
  if (!sequelize) {
    sequelize = new Sequelize(
      config[environment].database,
      config[environment].username,
      config[environment].password,
      config[environment].params
    );
  }

  // Database Object with the sequelize instance and all models in projet
  var db = {
    sequelize: sequelize,
    models: {}
  };

  // Basic model dir
  const modelsDir = path.join(__dirname, "models");

  // Read the directory to find all models
  fs.readdirSync(modelsDir).forEach(function(file){
    var model = sequelize.import(path.join(modelsDir, file));
    db.models[model.name] = model;
  });

  // Read all associations in models
  Object.keys(db.models).forEach(function(key) {
    if ("associate" in db.models[key]) {
      db.models[key].associate(db.models);
    }
  });

  return db;
};