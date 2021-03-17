module.exports = {
  // $ pm2 [start|restart|stop|delete] ecosystem.config.js
  
  apps:[{
    name: 'gavel-app',
    script: 'serve',
    exec_mode: cluster,
    env: {
      PM2_SERVE_PATH: '.',
      PM2_SERVE_PORT: 3000,
      PM2_SERVE_SPA: 'true',
      PM2_SERVE_HOMEPAGE: './build/index.html'
    }

  }]

};
