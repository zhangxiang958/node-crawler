const http = require('http');
const koa = require('koa');
const request = require('superagent');
const cheerio = require('cheerio');

const targetUrl = 'https://cnodejs.org/';
const zhihu = 'https://www.zhihu.com/topic/19593368/top-answers';

async function app () {
  let { text } = await request.get(targetUrl);
  const $ = cheerio.load(text);
  const items = [];
  $('#topic_list .topic_title').each((idx, ele) => {
    let $element = $(ele);
    items.push({
      title: $element.attr('title'),
      href: $element.attr('href')
    });
  });

  console.log(items);
}

// app();

async function zhihuData () {
  let { text } = await request.get(zhihu);
  const $ = cheerio.load(text);
  const items = [];
  $('#TopicMain .Card .List .List-item .ContentItem').each((idx, ele) => {
    let $element = $(ele);
    items.push({
      title: $element.attr('data-zop'),
      href: $element.attr('href')
    });
  });

  console.log(items);
}

zhihuData();