module.exports = {
  // $ pm2 [start|restart|stop|delete] ecosystem.config.js
  apps: [{
    name: "gavel-app",
    script: "npm run start:prod",
    instances: 4,
    exec_mode: "cluster",
    watch: true,
    ignore_watch: ["node_modules"],
    env_production: {
      NODE_ENV: "production",
      PM2_SERVE_PATH: "~/site/wwwroot/build",
      PM2_SERVE_PORT: 5000,
      PM2_SERVE_INCREMENT_VAR: "PORT"
    },
    env_development: {
      NODE_ENV: "development",
      PM2_SERVE_PATH: "./build",
      PM2_SERVE_PORT: 5030,
      PM2_SERVE_INCREMENT_VAR: "PORT"
    },
    args: "--no-daemon",
    interpreter: "node",
    interpreter_args: "--max-old-space-size=4096"

  }]

};
