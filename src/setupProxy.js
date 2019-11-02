const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "https://randomuser.me/api/0.8/?results=20",
    proxy({
      target: "https://randomuser.me",
      changeOrigin: true
    })
  );
};
