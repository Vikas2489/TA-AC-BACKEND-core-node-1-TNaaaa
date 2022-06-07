let fs = require("fs");

// SYNC CODE
console.log("One");
fs.readFile('./content.md', (error, content) => {
    console.log(error, content.toString());
})

// ASYNC CODE
console.log("One");

console.time("task1");
fs.readFile('./content.md', (error, content) => {
    console.log(error, content.toString());
    console.timeEnd("task1");
})

console.log("last");

//BUFFER

let buff1 = Buffer.alloc(10);
buff1.write("Welcome To Buffer.");
console.log(buff1.toString());