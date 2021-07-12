module.exports = {
  // $ pm2 [start|restart|stop|delete] ecosystem.config.js
  apps: [{
    name: "gavel-app",
    script: "serve",
    env_production: {
      NODE_ENV: "production",
      PM2_SERVE_PATH: "./build",
      PM2_SERVE_PORT: 5000,
      PM2_SERVE_INSTANCES: 0,
      PM2_SERVE_EXEC_MODE: "cluster",
      PM2_SERVE_INCREMENT_VAR: "PORT",
      PM2_SERVE_SPA: "true",
      PM2_SERVE_WATCH: "true",
      PM2_SERVE_IGNORE_WATCH: [
        "node_modules"
      ],
      PM2_SERVE_HOMEPAGE: "index.html"
    },
    env_development: {
      NODE_ENV: "development",
      PM2_SERVE_PATH: ".",
      PM2_SERVE_PORT: 5000,
      PM2_SERVE_INSTANCES: 0,
      PM2_SERVE_EXEC_MODE: "cluster",
      PM2_SERVE_INCREMENT_VAR: "PORT",
      PM2_SERVE_SPA: "true",
      PM2_SERVE_WATCH: "true",
      PM2_SERVE_IGNORE_WATCH: [
        "node_modules"
      ],
      PM2_SERVE_HOMEPAGE: "index.html"
    },
    args: "--no-daemon"

  }]

};
