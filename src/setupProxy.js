const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/execute',
    createProxyMiddleware({
      target: 'https://code-play-apis.onrender.com/api/execute',
      changeOrigin: true,
    })
  );
};