const neteaseHotlistDao = require('../dao/neteaseHotListDao');

const neteaseHotListService = {};

neteaseHotListService.add = async function ({ song_id, name, mv_id, author, author_id }) {
  let query = {
    song_id,
    name,
    mv_id,
    author,
    author_id
  };
  return await neteaseHotlistDao.add(query);
};

neteaseHotListService.delete = async function ({ id, song_id, comment_id }) {
  let query = {
    id,
    song_id,
    comment_id
  };
  return await neteaseHotlistDao.delete(query);
};

neteaseHotListService.get = async function (id) {
  return await neteaseHotlistDao.get({ id });
};

neteaseHotListService.getList = async function ({ id, song_id, if_get_comment, offset, limit}) {
  let query = {
    id,
    song_id,
    if_get_comment,
    offset,
    limit
  };

  Object.keys(query).forEach((k) => {
    if (undefined === query[k]) {
      Reflect.deleteProperty(query, k);
    }
  });
  
  return await neteaseHotlistDao.getList(query);
};

neteaseHotListService.update = async function ({ id, song_id, if_get_comment }) {
  let query = {
    id,
    song_id,
    if_get_comment
  };
  return await neteaseHotlistDao.update(query);
};

neteaseHotListService.updateBySongId = async function ({ id, song_id, if_get_comment }) {
  let query = {
    id,
    song_id,
    if_get_comment
  };
  return await neteaseHotlistDao.updateBySongId(query);
};

module.exports = neteaseHotListService;