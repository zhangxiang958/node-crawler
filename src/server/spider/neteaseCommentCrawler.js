const CronJob = require('cron').CronJob;

const neteaseApi = require('./neteaseMusicApi');

const neteaseHotListService = require('../service/neteaseHotlistService');
const redis = require('../service/redis');

const limit = 20;

const getCommentBySongId = async function (songId) {
  let offset = await redis.get(`${songId}CommentOffset`) || 0;
  await neteaseApi.getCommentsBySongId(songId, + offset, limit);
  await redis.set(`${songId}CommentOffset`, + offset + limit);
};

const getHotListSong = async function () {
  const [song] = await neteaseHotListService.getList({ if_get_comment: 0 });
  return song;
};

const start = async function () {
  const cronJob = new CronJob('*/1 * * * * *', async () => {
    const song = await getHotListSong();
    await getCommentBySongId(song.song_id);
  });

  cronJob.start();
};

start();