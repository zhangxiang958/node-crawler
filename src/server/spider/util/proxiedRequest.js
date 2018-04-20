const util = require('util');
const request = require('request');

const { promisify } = util;

// 代理服务器
const proxyHost = 'http-dyn.abuyun.com';
const proxyPort = 9020;

// 代理隧道验证信息
const proxyUser = 'H0W6K2ORQFQ0J72D';
const proxyPass = '10D9F4EBB6BE077A';

const proxyUrl = `http://${proxyUser}:${proxyPass}@${proxyHost}:${proxyPort}`;

const proxiedRequest = request.defaults({ 'proxy': proxyUrl });

// const requestAsync = promisify(request);
const proxiedRequestAsync = promisify(proxiedRequest);

module.exports = proxiedRequestAsync;