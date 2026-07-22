// ===============================
// Variable Declaration in JavaScript
// ===============================

// There are 3 ways to create variables in JavaScript.

// 1. Using var keyword
// Syntax:
// var variableName = value;

var score = 10;
var marks = 90;

// 2. Using let keyword
// Syntax:
// let variableName = value;

let age = 23;
let flag = 0;

// 3. Using const keyword
// Syntax:
// const variableName = value;

const x = 100;
const y = 5;


// ===============================
// Rules for Naming Variables
// ===============================

// 1. Variable names can contain:
//    - Lowercase letters (a-z)
//    - Uppercase letters (A-Z)
//    - Digits (0-9)
//    - Underscore (_)
//    - Dollar sign ($)

// Examples:
let firstName = "Vishal";
let _count = 5;
let $price = 100;
let student1 = "Rahul";

// 2. Variable names cannot contain spaces or special characters
// Wrong:
//let first name = "John";     // ❌

// Correct:
let firstName = "John";      // ✅

// 3. Variable names cannot start with a digit
// Wrong:
//let 1score = 90;             // ❌

// Correct:
let score1 = 90;             // ✅

// 4. Use meaningful variable names
let studentAge = 20;         // ✅
let a = 20;                  // Possible but not recommended

// 5. Reserved keywords cannot be used as variable names
// Wrong:
//let if = 10;                 // ❌
//let const = 20;              // ❌

// 6. JavaScript is case-sensitive
let marks = 90;
let Marks = 100;

// marks and Marks are different variables.