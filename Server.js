/**
 * Created by Administrator on 2016-01-22.
 */
var http = require("http");

function OnRequest(request, response){
    console.log("Request received.");
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
}

http.createServer(OnRequest).listen(8888);

console.log("Server has started.");