module.exports = {
  // $ pm2 [start|restart|stop|delete] ecosystem.config.js
  apps: [{
    name: "gavel-app",
    cwd: "/home/site/wwwroot",
    script: "serve",
    instances:4,
    exec_mode: "cluster",
    watch: true,
    ignore_watch: ["node_modules"],
    env_production: {
      NODE_ENV: "production",
      PM2_SERVE_PATH: "/home/site/wwwroot",
      PM2_SERVE_PORT: 5000,
      PM2_SERVE_INCREMENT_VAR: "PORT",
      PM2_SERVE_HOMEPAGE: "./build"
    },
    env_development: {
      NODE_ENV: "development",
      PM2_SERVE_PATH: "/home/site/wwwroot",
      PM2_SERVE_PORT: 5030,
      PM2_SERVE_INCREMENT_VAR: "PORT",
      PM2_SERVE_HOMEPAGE: "./build"
    },
    filter_env: ["REACT_"],
    args: "--no-daemon --spa",
    interpreter: "node",
    interpreter_args: "--max-old-space-size=4096"

  }]

};
