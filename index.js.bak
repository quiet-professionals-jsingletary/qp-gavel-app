// Redirect Utility
let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');

let app = express();

app.use(serveStatic('build', { 'index': ['index.html'] }));
app.use(serveStatic(path.join(__dirname, 'build')));
app.listen(3000);