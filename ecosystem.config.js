module.exports = {
  // $ pm2 [start|restart|stop|delete] ecosystem.config.js
  apps: [{
    name: "gavel-app",
    script: "serve build",
    cwb: "build",
    instances: 4,
    exec_mode: "cluster",
    watch: true,
    ignore_watch: ["node_modules"],
    env_production: {
      NODE_ENV: "production",
      PM2_SERVE_PATH: "/home/site/wwwroot/build",
      PM2_SERVE_PORT: 5000,
      PM2_SERVE_INCREMENT_VAR: "PORT",
      PM2_SERVE_HOMEPAGE: "/home/site/wwwroot/build/index.html"
    },
    env_development: {
      NODE_ENV: "development",
      PM2_SERVE_PATH: ".",
      PM2_SERVE_PORT: 5000,
      PM2_SERVE_INCREMENT_VAR: "PORT",
      PM2_SERVE_HOMEPAGE: "index.html"
    },
    args: "--no-daemon --spa",
    interpreter: "node",
    interpreter_args: "--max-old-space-size=4096 --env=production"

  }]

};
