var url = require("url");
const parsedUrl = url.parse(
    "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
    true
);
console.log(parsedUrl.pathname, parsedUrl.query, parsedUrl.host, parsedUrl.protocol);

// let parsedUrl1 = url.parse(`https://www.google.com/`, true);
// console.log(parsedUrl1);