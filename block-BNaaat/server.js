// Create a http server and use readFile and createReadStream to read a file and
//  send the data into response. 
// - add a listener on port 5555
// - create a file node.html
// - handle GET request on '/file' route to read node.html using fs.readFile
// - handle GET request on '/stream' route to read node.html using fs.createReadStream

let http = require("http");
let fs = require("fs");
// let url = require("url");


let server = http.createServer(handleRequest);

function handleRequest(request, response) {
    console.log(request.url);
    if (request.method === "GET" && request.url === "/file") {
        fs.readFile("./node.html", (err, content) => {
            if (err) {
                console.log(err);
            } else {
                response.setHeader("content-type", "text/html");
                response.end(content);
            }
        })
    } else if (request.method === "GET" && request.url === "/stream") {
        response.setHeader("content-type", "text/html");
        fs.createReadStream("./node.html").pipe(response);
    }
}

server.listen(5555, () => {
    console.log("just started listening on 5555.");
})