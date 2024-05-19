const http = require('http');
const path = require('path');
const fs = require('fs');
const scriptFile = path.join(__dirname, 'static','script.js');
const styleFile = path.join(__dirname, 'static','style.css');
const indexHtmlFile = path.join(__dirname, 'static','index.html');

const scriptRead = fs.readFileSync(scriptFile);
const styleRead = fs.readFileSync(styleFile);
const indexRead = fs.readFileSync(indexHtmlFile);

const server = http.createServer((req, res) => {
switch(req.url) {
  case "/": return res.end(indexRead);
  case "/script.js": return res.end(scriptRead);
  case "/style.css": return res.end(styleRead);
}
res.statusCode = 404;
return res.end('Error 404');
});
server.listen(3000);

