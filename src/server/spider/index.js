// const Crawler = require('crawler');
const Api = require('./api');
const CronJob = require('cron').CronJob;
const apiCrawler = require('./apiCrawler');

// const crawler = new Crawler({
//   maxConnection: 1,
//   rateLimit: 1000,
//   callback: (err, res, done) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const $ = res.$;
//       console.log($('#data').attr('data-state'));
//     }
//     done();
//   }
// });
// crawler.queue(['https://www.zhihu.com/topic/19897549/hot']);

const start = async function () {
  const cronJob = new CronJob('*/5 * * * * *', async () => {
    
  });
  cronJob.start();
};