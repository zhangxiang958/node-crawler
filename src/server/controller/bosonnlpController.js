const bosonnlp = require('bosonnlp');

const api = require('../router/api.js');

const fuckyoutest = api.get('/test', async (ctx, next) => {
  console.log('fuckme');
});

module.exports = [fuckyoutest];