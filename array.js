// Arrays in JavaScript can be declared using square brackets []. You can initialize an array with elements, or create an empty array and add elements later.

//Array with numbers
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

//Mixed Array
let mixed = [1, "Hello", true];
console.log(mixed); // [1, "Hello", true]

// empty array
let empty = [];
console.log(empty); // []


// Accessing Elements
// You can access elements of an array using indexing. Remember that JavaScript arrays are zero-indexed, meaning the first element is at index 0.

let vegetables = ["Carrot", "Potato", "Tomato"];
console.log(vegetables[0]); // Carrot
console.log(vegetables[1]); // Potato

//Methods in Arrays
// Arrays have built-in methods to perform common operations like adding, removing, and updating elements.

//Push Method       
// The push() method adds elements to the end of an array.
let game = ['Cricket', 'Football', 'Tennis'];
game.push('Basketball');
console.log(game);

//Pop Method
// The pop() method removes the last element from an array.
let fruits = ['Apple', 'Banana', 'Mango'];
fruits.pop();
console.log(fruits);

//Shift Method
// The shift() method removes the first element from an array.
let colors = ['Red', 'Green', 'Blue'];
colors.shift();
console.log(colors);

//Unshift Method
// The unshift() method adds elements to the beginning of an array.
let cars = ['BMW', 'Audi', 'Mercedes'];
cars.unshift('Toyota','Tata');
console.log(cars);


//Splice Method
// The splice() method can be used to add or remove elements from an array.
//Changes the contents of an array by removing, replacing, or adding elements. It takes three parameters: index, number of elements to remove, and optional new elements to add.

let corp = [ 'Google', 'Facebook', 'Amazon', 'Microsoft'];
corp.splice(2, 1); // Removes 'Amazon'
console.log(corp);

let months = ['January', 'March', 'April'];
months.splice(1, 0, 'February'); // 0 means no elements will be removed
console.log(months);

let days = ['Monday', 'Tuesday', 'Thursday', 'Friday'];
days.splice(2, 1, 'Wednesday'); // 1 element removed and 'Wednesday' added
console.log(days);

//Slice Method
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

let fruits1 = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];
let citrus = fruits1.slice(2, 4); // starts from index 2 and ends at index 4 (not included)
console.log(citrus); // ['Mango', 'Orange'] 
console.log(fruits1); // ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple']


// Iterating through arrays

// You can use loops to iterate through the elements of an array.   
let name2 = ['Ashish', 'Akash','Aaditya'];
for (let i=0; i<name2.length; i++){
    console.log(name2[i]);
}

//forEach Method
// The forEach() method executes a provided function once for each array element.
// forEach() is an array method that allows you to execute a provided function for each array element. It does not return anything and cannot be stopped or broken early.

let name3 = ['Nikki', 'Anki','Ram'];
name3.forEach(function (nam) {
    console.log(nam);
});

//using arrow function
let name4 = ['Nikki4', 'Anki4','Ram4'];
name4.forEach( name4 => console.log(name4));

//Map Method
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

let numbers1 = [1, 2, 3, 4, 5];
let double = numbers1.map(num => num * 2);
console.log(double); // [2, 4, 6, 8, 10]
console.log(numbers1); // [1, 2, 3, 4, 5]

//Filter Method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 let arr1 = [1, 2, 3, 4, 5];
 let even = arr1.filter(num => num%2 === 0);
 console.log(even); // [2, 4]
 console.log(arr1); // [1, 2, 3, 4, 5]


 let product = [
    {brand :'Apple',model : 'iPhone 12',price : 799},
    {brand :'Samsung',model : 'Galaxy S21',price : 999},
    {brand :'OnePlus',model : '8T',price : 749},
    {brand :'Google',model : 'Pixel 5',price : 699}
 ]
 product.forEach(pro => console.log(pro.brand));
let price = product.filter (pro => pro.price > 800);
console.log(price);  

//Reduce Method
// The reduce() method executes a reducer function (provided by you) on each element of the array (from left to right) to reduce the array to a single value. It can be used for various operations like summing values, finding a maximum, or building a new structure.

// let result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
let numb = [1, 2, 3, 4, 5];

// Sum all numbers in the array
let sum = numb.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);  // Output: 15

let products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 750 }
  ];
  
  // Calculate total price of all products
  let totalPrice = products.reduce((accumulator, product) => accumulator + product.price, 0);
  console.log(totalPrice);  // Output: 2250
  
