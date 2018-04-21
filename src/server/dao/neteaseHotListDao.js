const NeteaseHotList = require('../model/neteaseHotListModel');

const NeteaseHotListDao = {};

NeteaseHotListDao.add = async function (params) {
  const { song_id, name, mv_id, author, author_id } = params;
  let id = await NeteaseHotList.create({ song_id, name, mv_id, author, author_id });
  return id;
};

NeteaseHotListDao.get = async function (params) {
  const { id } = params;
  let article = await NeteaseHotList.findOne({ where: { id } });
  return article;
};

NeteaseHotListDao.getList = async function (params = {}) {
  return await NeteaseHotList.findAll({ 
    where: {
      ...params
    }
  });
};

NeteaseHotListDao.delete = async function (params) {
  const { id } = params;
  return await NeteaseHotList.destroy({ where: { id: id } });
};

NeteaseHotListDao.update = async function (params) {
  const { id, song_id, if_get_comment } = params;
  return await NeteaseHotList.update({ name, song_id, if_get_comment }, { where: { id: id } });
};

NeteaseHotListDao.updateBySongId = async function (params) {
  const { song_id, if_get_comment } = params;
  return await NeteaseHotList.update({ if_get_comment }, { where: { song_id: song_id } });
};

module.exports = NeteaseHotListDao;