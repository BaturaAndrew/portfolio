const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target:
        'https://api.mailgun.net/v3/sandboxebf75d45a47a4a3d97e3563dea292e0d.mailgun.org/messages',
      changeOrigin: true,
    })
  );
};
