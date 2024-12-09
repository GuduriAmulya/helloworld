//get all libraries needed to run..
// http,,fs,express
//create server using above libraries
//make sure it is listening at a port
// when a req is sent , server should send a response
//
let http=require("http");
let fs=require("fs");
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
  });
server.listen(8000);
//res code=200=success
