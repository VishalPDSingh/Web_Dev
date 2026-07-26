// ===============================
// null vs undefined
// ===============================

// undefined:
// A variable has been declared but has not been assigned a value yet.

let a;
console.log(a);     // undefined

// null:
// Represents an intentional empty value.
// It means the programmer has explicitly assigned "no value".

let b = 10;
b = null;
console.log(b);     // null


// ===============================
// Examples
// ===============================

var marks = 100;
var name = "Vishal";
var age;                  // undefined
var company = null;       // intentionally empty
var salary = undefined;   // explicitly assigned undefined (not commonly used)
var isStudent = false;

console.log(marks);
console.log(name);
console.log(age);
console.log(company);
console.log(salary);
console.log(isStudent);


// ===============================
// Object
// ===============================

// An object stores data in the form of key-value pairs.

var user = {
    name: "Vishal",
    company: "Google",
    age: 23
};

console.log(user);