const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  const file = fs.readFileSync(__dirname + "/index.html");
  response.writeHead(200, { "Content-type": "text/html; charset=UTF-8" });
  response.end(file);
});

server.listen(3000, () => console.log("http://localhost:3000"));
