const Sequelize = require('sequelize');
const db = require('../dao/db');

const Comments = db.define('comment', {
  author: {
    type: Sequelize.STRING
  },
  article_id: {
    type: Sequelize.STRING
  },
  comment_id: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  likes: {
    type: Sequelize.INTEGER
  },
  type: {
    type: Sequelize.INTEGER
  }
}, {
  freezeTableName: true
});

async function init() {
  await Comments.sync();
}

init();

module.exports = Comments;