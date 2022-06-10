console.log('Welcome to Nodejs');

let os = require("os");
console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.version());
console.log(os.uptime());

let { readFile } = require("fs");

let buff1 = Buffer.alloc(10);
buff1.write("Pieces of shit.....");
console.log(buff1.toString());


let buff2 = Buffer.allocUnsafe(10);
buff2.write("testinggggggg.................");
console.log(buff2.toString());


// blocking code
console.log("1");
for (let i = 0; i < 1000; i++) {}

console.log("10");


// non- blocking code
console.log("1");
setTimeout(() => {
    for (let i = 0; i < 1000; i++) {}
}, 2000);
console.log("10");