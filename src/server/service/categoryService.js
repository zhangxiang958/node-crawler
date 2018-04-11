const categoryDao = require('../dao/categoryDao');

const categoryService = {};

categoryService.add = async function ({ name, type, description }) {
  let query = {
    name,
    type,
    description
  };
  return await categoryDao.add(query);
};

categoryService.delete = async function ({ id, name, type, description }) {
  let query = {
    id,
    name,
    type,
    description
  };
  return await categoryDao.delete(query);
};

categoryService.get = async function (id) {
  return await categoryDao.get({ id });
};

categoryService.getList = async function ({ id, name, type, description, limit, offset }) {
  let query = {
    id,
    name,
    type,
    description,
    limit,
    offset
  };
  return await categoryDao.getList(query);
};

categoryService.update = async function ({ id, name, type, description }) {
  let query = {
    id,
    name,
    type,
    description
  };
  return await categoryDao.update(query);
};

module.exports = categoryService;