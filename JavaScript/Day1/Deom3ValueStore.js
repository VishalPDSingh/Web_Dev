// ===============================
// JavaScript Data Types
// ===============================

// JavaScript can store different types of values.

// 1. Number
// Used for both integers and decimal numbers.

let a = 10;
let b = -25;
let c = 34.56;


// 2. String
// A sequence of characters.
// Strings can be written using:
// - Double quotes (" ")
// - Single quotes (' ')
// - Backticks (` `)

let name = "Vishal";
let college = 'JIS';
let message = `Hello World`;


// 3. Boolean
// Represents only two values.

let isPass = true;
let isFail = false;


// 4. Undefined
// A variable has been declared but no value has been assigned yet.

let age;
console.log(age);    // undefined


// 5. Null
// Represents an intentional empty value.

let value = null;


// 6. Object
// Used to store data as key-value pairs.
// Keys are unique within an object.

let student = {
    name: "Vishal",
    company: "PayPal",
    age: 23
};

// Primitive: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Non-Primitive (Reference): Object (Arrays and Functions are also objects internally)