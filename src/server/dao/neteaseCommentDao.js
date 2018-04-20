const NeteaseComment = require('../model/neteaseCommentModel');

const NeteaseCommentDao = {};

NeteaseCommentDao.add = async function (params) {
  const { song_id, comment_id, content, user_id, nickname, liked_count } = params;
  let id = await NeteaseComment.create({ song_id, comment_id, content, user_id, nickname, liked_count });
  return id;
};

NeteaseCommentDao.get = async function (params) {
  const { id } = params;
  let article = await NeteaseComment.findOne({ where: { id } });
  return article;
};

NeteaseCommentDao.getList = async function (params = {}) {
  return await NeteaseComment.findAll(params);
};

NeteaseCommentDao.delete = async function (params) {
  const { id } = params;
  return await NeteaseComment.destroy({ where: { id: id } });
};

NeteaseCommentDao.update = async function (params) {
  const { id, song_id, comment_id, content, user_id, nickname, liked_count, createdAt, updatedAt } = params;
  return await NeteaseComment.update({ name, song_id, comment_id, content, user_id, nickname, liked_count, createdAt, updatedAt }, { where: { id: id } });
};

module.exports = NeteaseCommentDao;