const commentDao = require('../dao/commentDao');

const commentService = {};

commentService.add = async function ({ author, type, article_id, comment_id, content, likes }) {
  let query = {
    author,
    type,
    article_id,
    comment_id,
    content,
    likes
  };
  return await commentDao.add(query);
};

commentService.delete = async function ({ id }) {
  let query = {
    id
  };
  return await commentDao.delete(query);
};

commentService.get = async function (id) {
  return await commentDao.get({ id });
};

commentService.getList = async function ({ id, author, type, article_id }) {
  let query = {
    id,
    author,
    type,
    article_id
  };
  return await commentDao.getList(query);
};

commentService.update = async function ({ id, author, type, article_id, comment_id, content, likes }) {
  let query = {
    id,
    author,
    type,
    article_id,
    comment_id,
    content,
    likes
  };
  return await commentDao.update(query);
};

module.exports = commentService;