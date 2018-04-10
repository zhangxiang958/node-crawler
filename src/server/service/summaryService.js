const summaryDao = require('../dao/summaryDao');

const summaryService = {};

summaryService.add = async function ({ title, type, summary_id }) {
  let query = {
    title,
    type,
    summary_id
  };
  return await summaryDao.add(query);
};

summaryService.delete = async function ({ id, title, type, summary_id }) {
  let query = {
    id,
    title,
    type,
    summary_id
  };
  return await summaryDao.delete(query);
};

summaryService.get = async function (id) {
  return await summaryDao.get({ id });
};

summaryService.getList = async function ({ id, title, type, summary_id }) {
  let query = {
    id,
    title,
    type,
    summary_id
  };
  return await summaryDao.getList(query);
};

summaryService.update = async function ({ id, title, type, summary_id }) {
  let query = {
    id,
    title,
    type,
    summary_id
  };
  return await summaryDao.update(query);
};

module.exports = summaryService;