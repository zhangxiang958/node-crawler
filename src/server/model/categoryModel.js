const Sequelize = require('sequelize');
const db = require('../dao/db');

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  }
}, {
  freezeTableName: true
});

async function init() {
  await Category.sync();
}

init();

module.exports = Category;