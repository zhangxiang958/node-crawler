const Sequelize = require('sequelize');
const db = require('../dao/db');

const NeteaseComment = db.define('netease_comment', {
  song_id: {
    type: Sequelize.STRING
  },
  comment_id: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  user_id: {
    type: Sequelize.STRING
  },
  nickname: {
    type: Sequelize.STRING
  },
  liked_count: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true
});

async function init() {
  await NeteaseComment.sync();
}

init();

module.exports = NeteaseComment;