//Loops in JavaScript

// 1. for loop
console.log ('for---------------')
for (let i=0; i<5; i++){
    console.log(i)
}

console.log ('while---------------')
let i=0;
while (i<3){
    console.log(i);
    i++;
}

console.log ('do while---------------')
let h=0;
do {
    console.log(h);
    h++;
} while (h < 3);

let a=2
console.log(a<2); // false


console.log ('break---------------')
for (let i=0; i<10; i++){
    if (i===5){
        break;
    }
    console.log(i);
}

console.log ('continue---------------')
for (let i=0; i<5; i++){
    if (i === 3){
        continue;
    }
    console.log(i);
}