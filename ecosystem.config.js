module.exports = {
  // $ pm2 [start|restart|stop|delete] ecosystem.config.js
  name: "gavel-app",
  script: "serve",
  instances: 4,
  exec_mode: "cluster",
  watch: true,
  // ignore_watch: ["node_modules"],
  args: "--no-daemon --spa",
  interpreter: "node",
  interpreter_args: "--max-old-space-size=4096",
  env_production: {
    NODE_ENV: "production",
    PUBLIC_URL: "https://qp-gavel-mvp.azurewebsites.net",
    PM2_SERVE_PATH: ".",
    PM2_SERVE_PORT: 8080,
    PM2_SERVE_INCREMENT_VAR: "PORT"
  },
  env_development: {
    NODE_ENV: "development",
    HTTPS: true,
    PUBLIC_URL: "http://localhost:5000",
    PM2_SERVE_PATH: "./build",
    PM2_SERVE_PORT: 8080,
    PM2_SERVE_INCREMENT_VAR: "PORT"
  }

};
