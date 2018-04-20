const request = require('./util/proxiedRequest');

const neteaseCommentService = require('../service/neteaseCommentService');
const neteaseHotListService = require('../service/neteaseHotlistService');

const Api = {};

// 代理服务器
const proxyHost = 'http-dyn.abuyun.com';
const proxyPort = 9020;

// 代理隧道验证信息
const proxyUser = 'H0W6K2ORQFQ0J72D';
const proxyPass = '10D9F4EBB6BE077A';

const proxyUrl = `http://${proxyUser}:${proxyPass}@${proxyHost}:${proxyPort}`;

// 热门歌单
Api.getHotList = async function () {
  const options = {
    url: `http://119.29.207.124:3000/top/list?idx=1&proxy=${proxyUrl}`,
    headers: {
      'Proxy-Switch-Ip': 'yes'
    }
  };

  try {
    console.log('requesting http://119.29.207.124:3000/top/list?idx=1');
    let res = await request(options);
    let { body } = res;
    console.log(body);
    body = body && JSON.parse(body);
    if (body) {
      let tracks = body.playlist.tracks;
      for (let track of tracks) {
        let [ar] = track.ar;
        await neteaseHotListService.add({
          song_id: track.id,
          name: track.name,
          mv_id: track.mv,
          author: ar.name,
          author_id: ar.id
        });
      }
    } else {
      console.log('body 数据为空');
    }
  } catch (err) {
    console.log(err);
  }
};

// 根据歌曲 id 获取歌曲评论
Api.getCommentsBySongId = async function (songId, offset, limit) {
  const options = {
    url: `http://119.29.207.124:3000/comment/music?id=${songId}&offset=${offset}&limit=${limit}&proxy=${proxyUrl}`,
    headers: {
      'Proxy-Switch-Ip': 'yes'
    }
  };

  try {
    console.log(`requesting http://119.29.207.124:3000/comment/music?id=${songId}&offset=${offset}&limit=${limit}`);
    let res = await request(options);
    let { body } = res;
    console.log(body);
    body = body && JSON.parse(body);
    if (offset > body.total) {
      console.log(`歌曲 ${songId} 评论已经抓取完毕`);
      await neteaseHotListService.updateBySongId({ song_id: songId, if_get_comment: 1 });
      return;
    }
    if (body) {
      let comments = body.comments;
      for (let comment of comments) {
        await neteaseCommentService.add({
          song_id: songId,
          comment_id: comment.commentId,
          content: comment.content,
          user_id: comment.user.userId,
          nickname: comment.user.nickname,
          liked_count: comment.likedCount
        });
      }
    } else {
      console.log('body 数据为空');
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = Api;