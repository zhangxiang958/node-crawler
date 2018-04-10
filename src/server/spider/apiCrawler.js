const Api = require('./api');

const categoryService = require('../service/categoryService');
const summaryService = require('../service/summaryService');
const articleService = require('../service/articleService');
const commentService = require('../service/commentService');

const getCategory = async function () {
  return await categoryService.getList({});
};

const getDailyList = async function (categories) {
  for (let category of categories) {
    await Api.getDailyList(category.type);
  }
  return await summaryService.getList({});
};

const getArticle = async function (dailyList) {
  for (let daily of dailyList) {
    await Api.getArticle(daily.summary_id);
  }
  return await articleService.getList({});
};

const getLongComment = async function (articles) {
  for (let article of articles) {
    await Api.getLongComment(article.article_id);
  }
  return await commentService.getList({ type: 0 });
};

const getShortComment = async function (articles) {
  for (let article of articles) {
    await Api.getShortComment(article.article_id);
  }
  return await commentService.getList({ type: 1 });
};

const crawData = async function () {
  const categories = await getCategory();
  const dailyList = await getDailyList(categories);
  const articles = await getArticle(dailyList);
  await getLongComment(articles);
  await getShortComment(articles);
};

module.exports = crawData;