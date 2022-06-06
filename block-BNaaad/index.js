// write a function to square a number

function getSquare(num) {
    return num * 2;
}

console.log(getSquare(2));

// - Create a file named index.js with console.log('Welcome to Node.js') as script and 
// run it using script processor mode (`node index.js`)

console.log('Welcome to Node.js')

// - add a for loop to sum integers from 1 to 10 in index.js and rerun the script.

let final = 0;

for (let i = 1; i <= 10; i++) {
    final += i;
}
console.log(final);