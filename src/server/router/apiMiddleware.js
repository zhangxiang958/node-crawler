const fs = require('fs');
const path = require('path');
const Router = require('koa-router');

const router = new Router();

const controllerPath = path.resolve(__dirname, '../controller');
const controllers = fs.readdirSync(controllerPath).filter(c => c.endsWith('.js'));
controllers.forEach((controller) => {
  const handlers = require(path.resolve(controllerPath, controller));
  handlers.forEach((handler) => {
    router[handler.method](handler.url, handler.fn);
  });
});

module.exports = () => {
  Router()
    .use('/', () => { router.routes(), router.allowedMethods() })
    .routes();
};