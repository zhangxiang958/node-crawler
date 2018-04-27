const Comments = require('../model/commentModel');

const commentDao = {};

commentDao.add = async function (params) {
  const { author, type, article_id, comment_id, content, likes } = params;
  let id = await Comments.create({ author, type, article_id, comment_id, content, likes });
  return id;
};

commentDao.get = async function (params) {
  const { id } = params;
  let category = await Comments.findOne({ where: { id } });
  return category;
};

commentDao.getList = async function (params = {}) {
  return await Comments.findAll({ where: { ...params } });
};

commentDao.delete = async function (params) {
  const { id } = params;
  return await Comments.destroy({ where: { id: id } });
};

commentDao.update = async function (params) {
  const { id, author, type, article_id, comment_id, content, likes } = params;
  return await Comments.update({author, type, article_id, comment_id, content, likes }, { where: { id: id } });
};

module.exports = commentDao;