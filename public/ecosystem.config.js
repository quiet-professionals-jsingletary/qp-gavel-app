module.exports = {
  apps:[{
    name: 'GAVEL',
    script: 'serve',
    env: {
      PM2_SERVE_PATH: '/',
      PM2_SERVE_PORT: 3000,
      PM2_SERVE_SPA: 'true',
      PM2_SERVE_HOMEPAGE: '/home/site/wwwroot/build/index.html'
    }

  }]

};
