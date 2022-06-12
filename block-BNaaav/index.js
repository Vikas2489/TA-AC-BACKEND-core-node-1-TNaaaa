let http = require("http");
let fs = require("fs");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if (req.url === "/" && req.method === "GET") {
        res.setHeader("content-type", "text/html");
        fs.createReadStream(`./Vikas-Singh-Portfolio/index.html`).pipe(res);
    } else if (req.url.split('.').pop() === 'css') {
        res.setHeader('Content-Type', 'text/css');
        fs.readFile('./Vikas-Singh-Portfolio/assets/Stylesheet/' + req.url, (err, content) => {
            if (err) return console.log(err);
            res.end(content);
        });
    } else if (req.url === "/projects" && req.method === "GET") {
        res.setHeader("content-type", "text/html");
        fs.createReadStream(`./Vikas-Singh-Portfolio/projects.html`).pipe(res);
    } else if (req.url === "/my-pic" && req.method === "GET") {
        res.setHeader("content-type", "image/jpeg");
        fs.createReadStream(`./Vikas-Singh-Portfolio/Assets/images/my-pic.jpeg`).pipe(res);
    }
}

server.listen(1010);