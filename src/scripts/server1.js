/* eslint no-console: 0 */

const path = require('path');
const PassThrough = require('stream').PassThrough;
const Koa = require('koa');
const Static = require('koa-static');
const Router = require('koa-router');
const webpack = require('webpack'); // eslint-disable
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

const app = new Koa();
const router = new Router();


if (isDeveloping) {
  const compiler = webpack(config);
  const devMiddleware = (compiler, opts) => {
    const middleware = webpackMiddleware(compiler, opts);
    return async (ctx, next) => {
      await middleware(ctx.req, {
        end: (content) => {
          ctx.body = content;
        },
        setHeader: (name, value) => {
          ctx.set(name, value);
        }
      }, next);
      return middleware;
    };
  };

  const hotMiddleware = (compiler, opts) => {
    const middleware = webpackHotMiddleware(compiler, opts);
    return async (ctx, next) => {
      let stream = new PassThrough();
      ctx.body = stream;
      return await middleware(ctx.req, {
        write: stream.write.bind(stream),
        writeHead: (status, headers) => {
          ctx.status = status;
          ctx.set(headers);
        }
      }, next);
    };
  };

  const middleware = devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
      historyApiFallback: true
    }
  });

  app.use(middleware);
  app.use(hotMiddleware(compiler));
  router.get('*', async (ctx, next) => {
    const middleware = webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
      contentBase: 'src',
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
        historyApiFallback: true
      }
    });
    ctx.res.write(middleware.fileSystem.readFileSync(path.join(config.output.path + '/index.html')));
    ctx.res.end();
  });
  app
    .use(router.routes())
    .use(router.allowedMethods());
} else {
  app.use(Static(path.resolve(__dirname, '../client')));
  router.get('*', async (ctx, next) => {
    ctx.res.sendFile(path.resolve(__dirname, '../client/src/index.html'));
  });
  app
    .use(router.routes())
    .use(router.allowedMethods());
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
