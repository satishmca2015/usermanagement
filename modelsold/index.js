const dbConfig = require('../config/dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

// Creating a new Sequelize instance
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,  // Corrected the property name
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

// Function to initialize the database
const initDb = async () => {
  try {
    // Test the connection
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync all models
    await sequelize.sync({ force: false });
    console.log('DB Sync complete.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Initializing the database
initDb();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importing the model
db.users = require('./userModel.js')(sequelize, DataTypes);

module.exports = db;
