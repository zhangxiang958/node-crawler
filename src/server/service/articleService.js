const articleDao = require('../dao/articleDao');

const articleService = {};

articleService.add = async function ({ title, content, article_id }) {
  let query = {
    title,
    content,
    article_id
  };
  return await articleDao.add(query);
};

articleService.delete = async function ({ id, title, content, article_id }) {
  let query = {
    id,
    title,
    content,
    article_id
  };
  return await articleDao.delete(query);
};

articleService.get = async function (id) {
  return await articleDao.get({ id });
};

articleService.getList = async function ({ id, title, content, article_id, offset, limit}) {
  let query = {
    id,
    title,
    content,
    article_id,
    offset,
    limit
  };
  return await articleDao.getList(query);
};

articleService.update = async function ({ id, title, content, article_id }) {
  let query = {
    id,
    title,
    content,
    article_id
  };
  return await articleDao.update(query);
};

module.exports = articleService;