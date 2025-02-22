// Scope: Scope determines the accessibility of variables and functions in different parts of the program. There are two main types of scope in JavaScript:
// Global scope: Variables or functions declared outside any function or block are in the global scope.
// Local scope: Variables or functions declared inside a function or block are in local scope and are not accessible from outside.
// Block scope: With let and const, you can create block-scoped variables inside loops or conditionals.

let a =1;
function first(){
    var b=2;
    console.log(a);
    console.log(b);
}
first();
console.log(a);
// console.log( b);

// Hoisting: JavaScript hoists variables (declared with var), functions (function declarations), and classes to the top of their scope. However, variables declared with let and const are not hoisted in the same way as var. They are in a "temporal dead zone" and cannot be accessed until they are initialized.

console.log(greet());  // Output: "Hello, World!"
function greet() {
  return "Hello, World!";
}



