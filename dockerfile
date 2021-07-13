FROM buildpack-deps:stretch

ENV NODE_VERSION 14.15.1

# Run any scripts / install additional dependencies
RUN npm install pm2@latest -g
RUN pm2 update
RUN pm2 startup && pm2 save

# Expose ports needed to use Keymetrics.io
EXPOSE 80 443

# Start pm2.json process file
CMD ["pm2", "start", "ecosystem.config.js"]