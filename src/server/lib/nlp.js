const bosonnlp = require('bosonnlp');

const nlp = new bosonnlp.BosonNLP('06AUz7BW.25111.MxeExXvXHZi-');

const nlpApi = {};

nlpApi.sentiment = (textArr) => {
  return new Promise((resolve, reject) => {
    nlp.sentiment(data, (data) => {
      resolve(data);
    });
  });
};

nlpApi.extractKeywords = (data) => {
  return new Promise((resolve, reject) => {
    nlp.extractKeywords(data, (res) => { 
      res = JSON.parse(res);
      resolve(res);
    });
  });
};

nlpApi.tag = (text) => {
  return new Promise((resolve, reject) => {
    nlp.tag(text, (data) => {
      resolve(data);
    });
  });
}

module.exports = nlpApi;