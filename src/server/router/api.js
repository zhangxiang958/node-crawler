['get', 'post', 'put', 'delete', 'all'].forEach((method) => {
  module.exports[method] = (url, callback) => {
    return {
      url: url,
      method: method,
      fn: callback
    }
  }
});