// Premitive data types in JavaScript
// 1. Number
let a =2;
console.log(a) // 2
// 2. String
let b="Hello";
console.log(b) // Hello
// 3. Boolean
let c=true;
console.log(c) // true
// 4. Undefined
let d;    
console.log(d) // undefined
// 5. Null
let e=null;
console.log(e) // null
// 6. Symbol
let f=Symbol("foo");
console.log(f) // Symbol(foo)
// 7. BigInt
let g=1234567890123456789012345678901234567890n;        
console.log(g) // 1234567890123456789012345678901234567890n
//



console.log('Reference data types in JavaScript')
// Reference data types in JavaScript
// 1. Object
let h={name:"John", age:30};
console.log(h) // {name: "John", age: 30}
// 2. Array
let i=[1,2,3,4,5];
console.log(i) // [1, 2, 3, 4, 5]
// 3. Function
let j=function(){return "Hello"};
console.log(j()) // Hello
// 4. Date
let k=new Date();
console.log(k) // Sun May 23 2021 15:07:25 GMT+0530 (India Standard Time)
// 5. RegExp
let l=/ab+c/;
console.log(l) // /ab+c/
// 6. Error
// let m=new Error("This is an error");
// console.log(m) // Error: This is an error
// 7. Math
let n=Math;
console.log(n) // Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
// 8. JSON
let o=JSON;
console.log(o) // {parse: ƒ, stringify: ƒ}
// 9. Map
let map = new Map();
map.set ('name',"Ashish");
map.set ('age',27);
map.set ('occupation',"Software Developer");
console.log(map.get('name')) // Ashish

map.forEach((value,key)=>{
    console.log(`${key}:${value}`)
})

console.log(map.size) // to check the size of the map
console.log (map.has("name")) // to check if the key is present in the map
map.delete("name") // to delete the key from the map
console.log (map.get("name")) // undefined

// 10. Set

let q = new Set();
q.add("ashi")
q.add (true);
q.add(1);
q.add(2);
q.add(3);
q.add(2);
q.add(3);
console.log(q)
console.log(q.size) // to check the size of the set
console.log (q.has(1)) // to check if the value is present in the set
q.delete(1) // to delete the value from the set 
console.log (q.has(1)) // false