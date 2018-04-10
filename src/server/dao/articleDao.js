const Article = require('../model/articleModel');

const articleDao = {};

articleDao.add = async function (params) {
  const { title, article_id, content } = params;
  let id = await Article.create({ title, article_id, content });
  return id;
};

articleDao.get = async function (params) {
  const { id } = params;
  let article = await Article.findOne({ where: { id } });
  return article;
};

articleDao.getList = async function (params = {}) {
  return await Article.findAll(params);
};

articleDao.delete = async function (params) {
  const { id } = params;
  return await Article.destroy({ where: { id: id } });
};

articleDao.update = async function (params) {
  const { id, title, article_id, content, createdAt, updatedAt } = params;
  return await Article.update({ name, title, article_id,content, createdAt, updatedAt }, { where: { id: id } });
};

module.exports = articleDao;