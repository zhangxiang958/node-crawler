const http = require('http');
const koa = require('koa');
const request = require('superagent');
const cheerio = require('cheerio');

const zhihuEntryUrl = 'https://www.zhihu.com/topic/19897549/hot';

async function app () {
  let { text } = await request.get(zhihuEntryUrl);
  const $ = cheerio.load(text);
  const data = JSON.parse($('#data').attr('data-state'));
  const { entities } = data;
  console.log(entities);
  // $('#data').each((idx, ele) => {
  //   let $element = $(ele);
  //   console.log($element);
  //   // let { title } = JSON.parse($element.attr('data-zop'));
  //   // let metas = $element.children().filter((c) => { return c.name === 'meta' });
  //   // metas.forEach(function(element) {
  //   //   console.log(element);
  //   // });
  //   // let { card: { content } } = JSON.parse($element.attr('data-za-extra-module'));
  //   // console.log(content);
  //   // items.push({
  //   //   title: title,
  //   //   href: `https://www.zhihu.com/question/${questionId}`
  //   // });
  // });

  // console.log(items);
}

app();