// 1. handle GET request on '/' and send 'Welcome to homepage' in response in plain text.
// 2. handle GET request on '/about' and send response 'this is all about NodeJS' using h2 tag in HTML.
// 3. handle POST request on '/about' and send json response `{message: this is a post request}`.


let http = require("http");
let url = require("url");

let server = http.createServer(handleRequest);

function handleRequest(request, response) {
    let parsedUrl = url.parse(request.url, true);
    if (request.url === "/" && request.method === "GET") {
        response.end('Welcome to homepage');
    } else if (request.url === "/about" && request.method === "GET") {
        response.setHeader("Content-type", "text/html");
        response.end(`<h2>This is all about NodeJS</h2>`);
    } else if (parsedUrl.pathname === "/about" && request.method === "POST") {
        console.log(parsedUrl.query);
        response.end("posted");
    }
}

server.listen(5000, () => {
    console.log("Started listening on 5K port....");
})