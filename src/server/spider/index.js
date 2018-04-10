// const koa = require('koa');
const Crawler = require('crawler');

const categoryService = require('../service/categoryService');

// const zhihuEntryUrl = 'https://www.zhihu.com/topic/19897549/hot';

const crawler = new Crawler({
  maxConnection: 1,
  rateLimit: 1000,
  callback: (err, res, done) => {
    if (err) {
      console.log(err);
    } else {
      const $ = res.$;
      console.log($('#data').attr('data-state'));
    }
    done();
  }
});

crawler.queue(['https://www.zhihu.com/topic/19897549/hot']);