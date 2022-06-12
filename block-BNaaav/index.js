let http = require("http");
let fs = require("fs");

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if (req.url === "/" && req.method === "GET") {
        // fs.readFile(`./Vikas-Singh-Portfolio/index.html`, (err, content) => {
        //         res.setHeader("content-type", "text/html");
        //         console.log("vikas");
        //         console.log(err);
        //         res.end(content);
        //     })
        res.setHeader("content-type", "text/html");
        fs.createReadStream(`./Vikas-Singh-Portfolio/index.html`).pipe(res);
        fs.createReadStream(`./Vikas-Singh-Portfolio/Assets`).pipe(res);
    }
}

server.listen(1010);