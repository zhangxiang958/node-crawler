const Sequelize = require('sequelize');
const dbConfig = require('../dbConfig/default.json')['database'];

const host = dbConfig.host;
// const port = dbConfig.port;
const database = dbConfig.name;
const username = dbConfig.auth.user;
const password = dbConfig.auth.pass;

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log(`[database Connection ERROR]: ${err}`);
  });

module.exports = sequelize;