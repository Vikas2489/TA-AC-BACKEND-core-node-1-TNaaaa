// 1. create a basic server and listen on port 3000
// 2. write code to console
//   - request headers
//   - request method and url
// 3. request from browser on `http://localhost:3000/about`

let http = require("http");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.headers, req.method, req.url);
    res.end("Here the request ends");
}

server.listen(3000, () => {
    console.log("just listening");
})