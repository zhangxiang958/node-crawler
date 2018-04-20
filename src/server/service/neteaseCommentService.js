const neteaseCommentDao = require('../dao/neteaseCommentDao');

const neteaseCommentService = {};

neteaseCommentService.add = async function ({ song_id, comment_id, content, user_id, nickname, liked_count }) {
  let query = {
    song_id,
    comment_id,
    content,
    user_id,
    nickname,
    liked_count
  };
  return await neteaseCommentDao.add(query);
};

neteaseCommentService.delete = async function ({ id, song_id, comment_id }) {
  let query = {
    id,
    song_id,
    comment_id
  };
  return await neteaseCommentDao.delete(query);
};

neteaseCommentService.get = async function (id) {
  return await neteaseCommentDao.get({ id });
};

neteaseCommentService.getList = async function ({ id, song_id, comment_id, offset, limit}) {
  let query = {
    id,
    song_id,
    comment_id,
    offset,
    limit
  };
  return await neteaseCommentDao.getList(query);
};

neteaseCommentService.update = async function ({ id, song_id, content, comment_id }) {
  let query = {
    id,
    song_id,
    comment_id
  };
  return await neteaseCommentDao.update(query);
};

module.exports = neteaseCommentService;