const Sequelize = require('sequelize');
const db = require('../dao/db');

const Summary = db.define('summary', {
  title: {
    type: Sequelize.STRING
  },
  summary_id: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.INTEGER
  }
}, {
  freezeTableName: true
});

async function init() {
  await Summary.sync();
}

init();

module.exports = Summary;