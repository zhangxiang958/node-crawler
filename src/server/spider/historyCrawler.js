const CronJob = require('cron').CronJob;
const Api = require('./api');

const summaryService = require('../service/summaryService');
const articleService = require('../service/articleService');

const redis = require('../service/redis');
const dateJson = require('./util/date.json');

const limit = 5;

const getArticleContent = async function () {
  // summary offset 从 300 开始, 原本已有 299 条数据
  let offset = await redis.get('dateSummaryOffset') || 300;
  let summaries = await summaryService.getList({ offset: +offset, limit: +limit });
  if (!summaries.length) {
    console.log('获取文章已全部完成.');
    return;
  }
  let promies = summaries.map(async (s) => {
    return await Api.getNewsContent(s.summary_id);
  });
  await Promise.all(promies);
  await redis.set('dateSummaryOffset', +offset + limit);
};

const getLongComments = async function () {
  // article offset 从 269 开始, 原本已有 268 条数据
  let offset = await redis.get('dateArticleOffsetL') || 269;
  let articles = await articleService.getList({ offset: +offset, limit: +limit });
  if (!articles.length) {
    console.log('获取文章长评论已全部完成.');
    return;
  }
  let promies = articles.map(async (a) => {
    return await Api.getNewsLongComments(a.article_id);
  });
  await Promise.all(promies);
  await redis.set('dateArticleOffsetL', +offset + limit);
};

const getShortComments = async function () {
  // article offset 从 269 开始, 原本已有 268 条数据
  let offset = await redis.get('dateArticleOffsetS') || 269;
  let articles = await articleService.getList({ offset: +offset, limit: +limit });
  if (!articles.length) {
    console.log('获取文章短评论已全部完成.');
    return;
  }
  let promies = articles.map(async (a) => {
    return await Api.getNewsShortComments(a.article_id);
  });
  await Promise.all(promies);
  await redis.set('dateArticleOffsetS', +offset + limit);
};


const start = async function () {
  const mainCronJob = new CronJob('*/5 * * * * *', async () => {
    let offset = await redis.get('dateOffset') || 0;
    let index = +offset;
    let dates = dateJson.slice(index, index + 5);
    let promies = dates.map(async (d) => {
      return await Api.getHistiory(d);
    });
    await Promise.all(promies);
    await redis.set('dateOffset', index + 5);
  });

  const getArticleJob = new CronJob('*/6 * * * * *', async () => { await getArticleContent(); });
  const getLongCommentsJob = new CronJob('*/7 * * * * *', async () => { await getLongComments(); });
  const getShortCommentsJob = new CronJob('*/8 * * * * *', async () => { await getShortComments(); });
  
  mainCronJob.start();
  getArticleJob.start();
  getLongCommentsJob.start();
  getShortCommentsJob.start();
};

start();