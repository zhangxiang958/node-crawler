const Koa = require('koa');
const compose = require('koa-compose');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const apiRouterMiddleware = require('./router/apiMiddleware');

const PORT = 8989;
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://0.0.0.0:3000');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type');
  if (ctx.request.method == 'OPTIONS') {
    ctx.response.status = 200;
  } else {
    await next();
  }
})

app.use(compose([
  bodyParser(),
  apiRouterMiddleware()
]));

const server = require('http').createServer(app.callback());

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is listening on port ${PORT}`);
});