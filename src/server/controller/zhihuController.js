const api = require('../router/api.js');

const commentService = require('../service/commentService');

const getLongCommentList = api.get('/getZhihuLongCommentList', async (ctx, next) => {
  const { offset = 0, limit = 100 } = ctx.request.query;
  let list = await commentService.getList({ type: 0, offset: + offset, limit: + limit });
  list = list.map((item) => {
    return item.content;
  });
  ctx.body = list;
});

module.exports = [getLongCommentList];