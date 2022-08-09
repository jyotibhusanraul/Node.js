const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { "Content_Type": "application/Json" });
    resp.write('hi');
    resp.end();
}).listen(5000);