module.exports = {
  // $ pm2 [start|restart|stop|delete] ecosystem.config.js
  name: "gavel-app",
  script: "serve",
    env: {
      // NODE_ENV: "production",
      // PUBLIC_URL: "https://qp-gavel-mvp.azurewebsites.net",
      PM2_SERVE_PATH: "./build",
      // PM2_SERVE_PORT: "PORT",
      // PM2_SERVE_SPA: "true",
      // PM2_SERVE_HOMEPAGE: './index.html'
  },
  args: "--no-daemon"
}