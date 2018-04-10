const Sequelize = require('sequelize');
const db = require('../dao/db');

const Article = db.define('article', {
  title: {
    type: Sequelize.STRING
  },
  article_id: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  }
}, {
  freezeTableName: true
});

async function init() {
  await Article.sync();
}

init();

module.exports = Article;