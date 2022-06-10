// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object


var http = require("http");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req, res);
}

server.listen(5000, () => {
    console.log("started listening on 5k port");
});



// Q. create a node server 
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

let server5100 = http.createServer(handleRequestOn5100);

function handleRequestOn5100(req, res) {
    res.setHeader("content-type", "text/plain");
    res.end('My first server in NodeJS');
}

server5100.listen(5100);


// Q. write code to create a node server 
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

let server5555 = http.createServer(handleRequestOn5555);

function handleRequestOn5555(req, res) {
    console.log(req.headers['user-agent']);
    res.end();
}

server5555.listen(5555);

// Q. write code to create a node server 
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

let server5566 = http.createServer(handleRequestOn5566);

function handleRequestOn5566(req, res) {
    console.log(req.url, req.method);
    res.setHeader("Content-type", "text/plain");
    res.end(`Requested Url is ${req.url} while the request method is ${req.method}`);
}

server5566.listen(5566);

// Q. write code to create a node server 
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.


let server7000 = http.createServer(handleRequestOn7000);

function handleRequestOn7000(req, res) {
    res.setHeader("Content-type", "application/json");
    res.end(`${req.headers}`);
}

server7000.listen(7000, () => {
    console.log(`server listening on port 7000`);
});

// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

let server3333 = http.createServer(handleRequestOn3333);

function handleRequestOn3333(req, res) {
    res.statusCode = 202;
    res.end(`${res.statusCode}`);
}

server3333.listen(3333);

// Q. create a server 
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`) 

let server8000 = http.createServer(handleRequestOn8000);

function handleRequestOn8000(req, res) {
    res.setHeader("content-type", "text/html");
    res.end(`<h3>Welcome to altcampus</h3>`);
}

server8000.listen(8000);

// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.


// let server8000 = http.createServer(handleRequestOn8000);

// function handleRequestOn8000(req, res) {
//     res.writeHead(200, { "content-type": "text/html" })
//     res.end(`<h3>Welcome to altcampus</h3>`);
// }

// server8000.listen(8000);


// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})


let server8888 = http.createServer(handleRequestOn8888);

function handleRequestOn8888(req, res) {
    res.writeHead(200, { "content-type": "application/json" })
    res.end(`{success: true, message: 'Welcome to Nodejs'}`);
}

server8888.listen(8888);


// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`


let server5050 = http.createServer(handleRequestOn5050);

function handleRequestOn5050(req, res) {
    console.log(req.method);
    res.writeHead(200, { "content-type": "text/html" })
    res.end(`<h2>posted for first time</h2>`);
}

server5050.listen(5050);


// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes 
//   with a status code of 404.

let server2345 = http.createServer(handleRequestOn2345);

function handleRequestOn2345(req, res) {
    if (req.url === "/" && req.method === "GET") {
        res.setHeader("content-type", "text/plain");
        res.end("Vikas Kumar is a programmer");
    } else if (req.url === "/about" && req.method === "GET") {
        res.setHeader("content-type", "text/html");
        res.end(`<h2>Vikas Kumar is a programmer</h2>`);
    } else {
        res.end("Page 404 Error");
    }
}

server2345.listen(2345);

// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.


let newServer = http.createServer(handleNewRequest);

function handleNewRequest(req, res) {
    if (req.method === "GET" && req.url === "/users") {
        res.setHeader("content-type", "text/html");
        res.end(`<form>
        <input type="text" placeholder="Enter Your Name">
        <input type="email" placeholder="Enter Your Email">
      </form>`);
    } else if (req.method === "POST" && req.url === "/users") {
        res.setHeader("conten-type", "text/plain");
        res.end("Posted for the second time.");
    }
}

newServer.listen(4321);


// Q. create a server and handle query params from the request on following url i.e.
//  `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

let url = require("url");

let server9090 = http.createServer(handleRequestOn9090);

function handleRequestOn9090(req, res) {
    let parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.pathname, req.url);
    let queryObj = parsedUrl.query;
    res.setHeader("content-type", "application/json");
    res.end(queryObj.email);
}

server9090.listen(9090);