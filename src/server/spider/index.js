const Crawler = require('crawler');
// const CronJob = require('cron').CronJob;

const crawler = new Crawler({
  maxConnection: 1,
  rateLimit: 1000,
  callback: (err, res, done) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      console.log(res.body);
      const $ = res.$;
      // console.log($('.S_txt1').attr('data-state'));
      console.log($('.list_title_b').html());
    }
    done();
  }
});

crawler.queue(['https://weibo.com/?category=1760']);