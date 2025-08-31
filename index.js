const http_pkg = require("http");

const filesys = require("fs").promises;

const requestor = function(requested, responded){
    console.log(requested.url);
    if (requested.url === '/'){
      filesys.readFile(__dirname + "/links.html").then(
        da_page => {
          responded.setHeader("Content-Type", "text/html; charset=UTF-8");
          responded.writeHead(200);
          responded.end(da_page);
        }
      );
    } else {
      filesys.readFile(__dirname + "/stuff.json").then(
        da_page => {
          responded.setHeader("Content-Type", "application/json; charset=UTF-8");
          responded.writeHead(200);
          responded.end(da_page);
        }
      );
    }
  };

let theserver = http_pkg.createServer(

  requestor
  
);

theserver.listen( 8080, "127.0.0.1");