const http_pkg = require("http");

const filesys = require("fs").promises;

const requestor = function(requested, responded){
  function responso(pagin, typey) {
  responded.setHeader("Content-Type", typey + "; charset=UTF-8");
  responded.writeHead(200);
  responded.end(pagin);
    }
    console.log(requested.url);
    if (requested.url === '/'){
      filesys.readFile(__dirname + "/links.html").then(
        responso(pagin, "text/plain")
      );
    } else {
      filesys.readFile(__dirname + "/stuff.json").then(
        responso(pagin, "application/json")
      );
    }
  };

let theserver = http_pkg.createServer(

  requestor
  
);

theserver.listen( 8080, "127.0.0.1");