const redis = require('redis');
const util = require('util');

const { promisify } = util;
const client = redis.createClient();

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

client.on('error', function (err) {
  console.log('Error ' + err);
});

const redisClient = {};

redisClient.get = async function (key) {
  return await getAsync(key);
};

redisClient.set = async function (key, value) {
  return await setAsync(key, value);
};

module.exports = redisClient;