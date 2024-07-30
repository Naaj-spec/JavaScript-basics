<script src="main.js"></script>


// Part 1: Data Types
let str = "Hello, World!";
let num = 42;
let bool = true;
let nullVar = null;
let undef;
let obj = { name: "John", age: 30 };
let sym = Symbol('symbol');

console.log(str);
console.log(num);
console.log(bool);
console.log(nullVar);
console.log(undef);
console.log(obj);
console.log(sym);

// Part 2: Arrays
let numbers = [5, 10, 15, 20, 25];

let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

let filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

numbers.forEach(num => console.log(num));

// Part 3: Functions
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('Alice');

function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray(numbers));

function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax(numbers));
