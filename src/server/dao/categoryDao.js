const Category = require('../model/categoryModel');

const categoryDao = {};

categoryDao.add = async function (params) {
  const { name, type, description } = params;
  let id = await Category.create({ name, type, description });
  return id;
};

categoryDao.get = async function (params) {
  const { id } = params;
  let category = await Category.findOne({ where: { id } });
  return category;
};

categoryDao.getList = async function (params = {}) {
  return await Category.findAll(params);
};

categoryDao.delete = async function (params) {
  const { id } = params;
  return await Category.destroy({ where: { id: id } });
};

categoryDao.update = async function (params) {
  const { id, name, type, description, createdAt, updatedAt } = params;
  return await Category.update({ name, type, description, createdAt, updatedAt }, { where: { id: id } });
};

module.exports = categoryDao;