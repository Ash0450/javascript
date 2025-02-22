console.log(a) // hoisting is not working here
var a=2
var a=3; // redeclaration is allowed
console.log(a) // 3

function test(){
    var a=4
    console.log(a) // 4
}
test(); // a is function scope
console.log(a);

console.log ("let variable")
// let variable
// console.log(b) // hoisting is not working here
let b=2
// let b=3; redeclaration is not allowed
b=4; // reassign is allowed
console.log(b) // 3

console.log ("const variable")
// const variable
// console.log(c) // hoisting is not working here
const c=2
// const c=3; redeclaration is not allowed
// c=4; reassign is not allowed
console.log(c) // 3


// Function scope: Variables are visible throughout the function where they are declared.
// Block scope: Variables are only visible within the block (enclosed by {}) where they are declared.


// Hoisting:

// var is hoisted, meaning the declaration is moved to the top of the function or script. However, its value is set to undefined until the code reaches the assignment.

// let and const are hoisted but are not initialized until their actual declaration in the code. This is called a "temporal dead zone," and accessing them before the declaration throws a ReferenceError.


