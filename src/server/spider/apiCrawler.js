const CronJob = require('cron').CronJob;

const Api = require('./api');
const categoryService = require('../service/categoryService');
const summaryService = require('../service/summaryService');
const articleService = require('../service/articleService');
const redis = require('../service/redis');


const limit = 5;

const getCategory = async function (params) {
  return await categoryService.getList(params);
};

const getDailyList = async function (id) {
  return await Api.getDailyList(id);
};

const getArticle = async function (dailyId) {
  return await Api.getNewsContent(dailyId);
};

const getLongComment = async function (articleId) {
  return await Api.getNewsLongComments(articleId);
};

const getShortComment = async function (articleId) {
  return await Api.getNewsShortComments(articleId);
};

const crawData = async function () {
  const dailyJob = new CronJob('*/5 * * * * *', async () => { await crawDailyList(); });
  const articleJob = new CronJob('*/6 * * * * *', async () => { await crawArticle(); });
  const longCommentJob = new CronJob('*/7 * * * * *', async () => { await crawLongComment(); });
  const shortCommentJob = new CronJob('*/8 * * * * *', async () => { await crawShortComment(); });
  dailyJob.start();
  articleJob.start();
  longCommentJob.start();
  shortCommentJob.start();
};

const crawDailyList = async function () {
  let offset = await redis.get('categoryOffset') || 0;
  const categories = await getCategory({ offset: +offset, limit: +limit });
  if (!categories.length) {
    console.log('分类下日报已抓取完成');
    return;
  }
  let promises = categories.map(async (c) => {
    return await getDailyList(c.type);
  });
  await Promise.all(promises);
  await redis.set('categoryOffset', + offset + limit);
};

const crawArticle = async function () {
  let offset = await redis.get('dailyOffset') || 0;
  const dailies = await summaryService.getList({ offset: +offset, limit: +limit });
  if (!dailies.length) {
    console.log('文章已抓取完成');
    return;
  }
  let promises = dailies.map(async (d) => {
    return await getArticle(d.summary_id);
  });
  await Promise.all(promises);
  await redis.set('dailyOffset', + offset + limit);
};

const crawLongComment = async function () {
  let offset = await redis.get('articleOffsetL') || 0;
  const articles = await articleService.getList({ offset: +offset, limit: +limit });
  if (!articles.length) {
    console.log('文章长评论已抓取完成');
    return;
  }
  let promises = articles.map(async (a) => {
    return await getLongComment(a.article_id);
  });
  await Promise.all(promises);
  await redis.set('articleOffsetL', + offset + limit);
};

const crawShortComment = async function () {
  let offset = await redis.get('articleOffsetS') || 0;
  const articles = await articleService.getList({ offset: +offset, limit: +limit });
  if (!articles.length) {
    console.log('文章短评论已抓取完成');
    return;
  }
  let promises = articles.map(async (a) => {
    return await getShortComment(a.article_id);
  });
  await Promise.all(promises);
  await redis.set('articleOffsetS', + offset + limit);
};

crawData();

module.exports = crawData;