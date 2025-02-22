// A Function Declaration is a named function defined using the function keyword. This kind of function can be invoked before its definition due to hoisting.
function functionDeclaration(name){
    console.log (`hello ${name}`)
}
functionDeclaration("I am functionDeclaration")


console.log("functionExpression-----------------")
// A Function Expression defines a function as part of an expression, and the function is assigned to a variable. The function can be anonymous (no name) or named.
const functionExpression = function ash (name){
    console.log(`hello ${name}`)
}
functionExpression("I am functionExpression")


console.log("arrowFunction-----------------")
// An Arrow Function is a shorter syntax for writing function expressions. It uses the => syntax and does not have its own this, arguments, super, or new.target.

const arrowFunction =(name) =>{
    console.log(`hello ${name}`)
}
arrowFunction("Ashish")

// Single parameter (parentheses are optional)
const withoutpara = num => num * 2;
console.log (withoutpara(2));



// Parameters and Return Values
// Functions in JavaScript can accept parameters (inputs) and return values (outputs).

// Parameters:
// Parameters are the values passed into a function when it's called. They allow functions to operate on different values each time they are called.

// Return Values:
// Functions can return a value using the return statement. If no return is specified, the function returns undefined by default.


function add (a,b){
    return a+b;
}
let sum = add(2,3);
console.log(sum)

// Default parameters: Functions can also have default parameter values if no value is passed for them.
function defaultParameter(name="Default Parameter"){
return `hello ${name}`
}
console.log(defaultParameter());

function multiplication(a,b){
    return a*b;
}
console.log(multiplication(2,3));

