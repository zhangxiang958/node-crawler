const request = require('./ajax');

const Api = {};
const HOST = '127.0.0.1';
const PORT = '8989';

Api.sentimentAnalysisSingle = function (textArr) {
  return new Promise((resolve, reject) => {
    request.post(`http://${HOST}:${PORT}/sentiment/single`, {
      data: JSON.stringify({ textArr: textArr }),
      type: 'application/json'
    })
    .then((res) => {
      resolve(res);
    }, (err) => {
      reject(err)
    })
    .catch((err) => {
      reject(err);
    });
  });
};

Api.sentimentAnalysisMuti = function (textArr) {
  return new Promise((resolve, reject) => {
    request.post(`http://${HOST}:${PORT}/sentiment/multiple`, {
      data: JSON.stringify({ textArr: textArr }),
      type: 'application/json'
    })
    .then((res) => {
      resolve(res);
    }, (err) => {
      reject(err);
    })
    .catch((err) => {
      reject(err);
    });
  });
};

Api.tagAnalysis = function (textArr) {
  return new Promise((resolve, reject) => {
    request.post(`http://${HOST}:${PORT}/analysis/tag`, {
      data: JSON.stringify({ text: textArr }),
      type: 'application/json'
    })
    .then((res) => {
      resolve(res);
    }, (err) => {
      reject(err)
    })
    .catch((err) => {
      reject(err);
    });
  });
};

Api.extractKeywords = function (textArr) {
  return new Promise((resolve, reject) => {
    request.post(`http://${HOST}:${PORT}/extract/keyword/`, {
      data: JSON.stringify({ textArr: textArr }),
      type: 'application/json'
    })
    .then(res => {
      resolve(res);
    }, (err) => {
      reject(err)
    })
    .catch(err => {
      reject(err);
    });
  });
};

Api.getZhihuCommentList = function () {
  return new Promise((resolve, reject) => {
    request.get(`http://${HOST}:${PORT}/getZhihuCommentList`, {
      data: {
        offset: 0,
        limit: 100
      }
    })
    .then(res => {
      resolve(res);
    }, (err) => {
      reject(err)
    })
    .catch((err) => {
      reject(err);
    });
  });
};

module.exports = Api;