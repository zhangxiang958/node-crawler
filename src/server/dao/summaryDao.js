const Summary = require('../model/summaryModel');

const summaryDao = {};

summaryDao.add = async function (params) {
  const { title, type, summary_id } = params;
  console.log(summary_id);
  let id = await Summary.create({ title, type, summary_id });
  return id;
};

summaryDao.get = async function (params) {
  const { id } = params;
  let category = await Summary.findOne({ where: { id } });
  return category;
};

summaryDao.getList = async function (params = {}) {
  return await Summary.findAll(params);
};

summaryDao.delete = async function (params) {
  const { id } = params;
  return await Summary.destroy({ where: { id: id } });
};

summaryDao.update = async function (params) {
  const { id, title, type, summary_id, createdAt, updatedAt } = params;
  return await Summary.update({title, type, summary_id, createdAt, updatedAt }, { where: { id: id } });
};

module.exports = summaryDao;