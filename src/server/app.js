const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');

const apiRouterMiddleware = require('./router/apiMiddleware');

const PORT = 8989;
const app = new Koa();
const router = new Router();

app.use(async (ctx, next) => {
  ctx.response.body = 'hello world';
  await next();
});

app.use(apiRouterMiddleware);


const server = http.createServer(app.callback());

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is listening on port ${PORT}`);
});