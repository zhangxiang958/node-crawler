const api = require('../router/api.js');
const nlp = require('../lib/nlp.js');

const index = api.get('/', async (ctx, next) => {
  ctx.body = 'welcome to my nlp api!';
});

// 单文本情感分析
const sentimentSingle = api.post('/sentiment/single', async (ctx, next) => {
  const textArr = ctx.request.body.textArr || [];
  let data = await nlp.sentiment(textArr);
  console.log('sentimentSingle result:', data);
  ctx.body = data;
});

// 多文本情感分析
const sentimentMultiple = api.post('/sentiment/multiple', async (ctx, next) => {
  const textArr = ctx.request.body.textArr || [];
  let payLoad = textArr.map((t) => { return t.text; });
  let data = await nlp.sentiment(payLoad);
  console.log('sentimentMultiple result:', data);
  ctx.body = data;
});

// 关键字提取
const extractKeywords = api.post('/extract/keyword', async (ctx, next) => {
  let textArr = ctx.request.body.textArr || ['你看看', '我看看'];
  let res = await nlp.extractKeywords(textArr);
  console.log('extractKeywords result:', res);
  ctx.body = {
    result: res
  };
});

// 词性分析
const tagAnalysis = api.post('/analysis/tag', async (ctx, next) => {
  const text = ctx.request.body.text || '';
  const data = await nlp.tag(text);
  console.log('tagAnalysis result:', data);
  ctx.body = {
    result: data
  };
});

module.exports = [index, sentimentSingle, sentimentMultiple, extractKeywords, tagAnalysis];