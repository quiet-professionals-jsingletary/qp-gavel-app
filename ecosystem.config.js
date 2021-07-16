module.exports = {
  // $ pm2 [start|restart|stop|delete] ecosystem.config.js
  apps: [{
    name: "gavel-app",
    script: "serve build -s",
    cwb: "build",
    instances: 4,
    exec_mode: "cluster",
    watch: true,
    ignore_watch: ["node_modules"],
    env_production: {
      NODE_ENV: "production",
      PM2_SERVE_PATH: "~/site/wwwroot/build",
      PM2_SERVE_PORT: 8080,
      PM2_SERVE_INCREMENT_VAR: "PORT",
      PM2_SERVE_HOMEPAGE: "~/site/wwwroot/build/index.html"
    },
    env_development: {
      NODE_ENV: "development",
      PM2_SERVE_PATH: ".",
      PM2_SERVE_PORT: 8080,
      PM2_SERVE_INCREMENT_VAR: "PORT",
      PM2_SERVE_HOMEPAGE: ".index.html"
    },
    args: "--no-daemon",
    interpreter: "node",
    interpreter_args: "--max-old-space-size=4096"

  }]

};
