const util = require('util');
const request = require('request');

const categoryService = require('../service/categoryService');
const summaryService = require('../service/summaryService');
const articleService = require('../service/articleService');
const commentService = require('../service/commentService');

const { promisify } = util;
const requestAsync = promisify(request);
const Api = {};

// 获取日报列表
Api.getCatory = async function () {
  try {
    let res = await requestAsync('http://news-at.zhihu.com/api/4/themes');
    let { body } = res;
    body = JSON.parse(body);
    let list = body.others;
    for (let category of list) {
      console.log(category);
      await categoryService.add({ 
        name: category.name,
        type: category.id,
        description: category.description
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// 获取日报内容
Api.getDailtList = async function (id) {
  try {
    let res = await requestAsync(`http://news-at.zhihu.com/api/4/theme/${id}`);
    let { body } = res;
    body = JSON.parse(body);
    let stories = body.stories;
    for (let story of stories) {
      await summaryService.add({
        title: story.title,
        summary_id: String(story.id),
        type: 0
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// 获取文章详情
Api.getNewsContent = async function (id) {
  try {
    let res = await requestAsync(`http://news-at.zhihu.com/api/4/news/${id}`);
    let { body } = res;
    body = JSON.parse(body);
    await articleService.add({
      title: body.title,
      article_id: body.id,
      content: body.body
    });
  } catch (err) {
    console.log(err);
  }
};

// 获取文章长评论
Api.getNewsLongComments = async function (id) {
  try {
    let res = await requestAsync(`http://news-at.zhihu.com/api/4/story/${id}/long-comments`);
    let { body } = res;
    body = JSON.parse(body);
    let comments = body.comments;
    for (let comment of comments) {
      await commentService.add({
        author: comment.author,
        article_id: id,
        comment_id: comment.id,
        content: comment.content,
        likes: body.likes,
        type: 0
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// 获取文章短评论
Api.getNewsShortComments = async function (id) {
  try {
    let res = await requestAsync(`http://news-at.zhihu.com/api/4/story/${id}/short-comments`);
    let { body } = res;
    body = JSON.parse(body);
    let comments = body.comments;
    for (let comment of comments) {
      await commentService.add({
        author: comment.author,
        article_id: id,
        comment_id: comment.id,
        content: comment.content,
        likes: body.likes,
        type: 1
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// 历史信息
Api.getHistiory = async function (date) {
  try {
    let res = await requestAsync(`http://news.at.zhihu.com/api/4/news/before/${date}`);
    let { body } = res;
    body = JSON.parse(body);
    let stories = body.stories;
    for (let story of stories) {
      await summaryService.add({
        title: story.title,
        summary_id: String(story.id),
        type: 1
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = Api;