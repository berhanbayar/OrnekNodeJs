var http = require('http');
 
http.createServer((req,res) => {
 
   res.writeHead(200);
   res.write("Hello World!");
   res.end("\n Uygulama bitti");
 
}).listen(9191);
