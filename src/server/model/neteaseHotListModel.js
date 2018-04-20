const Sequelize = require('sequelize');
const db = require('../dao/db');

const NeteaseHotList = db.define('netease_hotlist', {
  song_id: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  mv_id: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  author_id: {
    type: Sequelize.STRING
  },
  if_get_comment: {
    type: Sequelize.INTEGER
  }
}, {
  freezeTableName: true
});

async function init() {
  await NeteaseHotList.sync();
}

init();

module.exports = NeteaseHotList;