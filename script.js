console.log(20);
let js = "Amazing";
console.log(js);
const name = "Chamrouen";
console.log(name);
console.log(`Hello my name is ${name}`);

// Checking age condition
const age = 13;
const isOldEnought = age >= 18;
if (isOldEnought){
    console.log("You can start driving licience...🚗");
} else{
    const yearLeft = 18 - age;
    console.log(`You are you young...You need ${yearLeft} years to go`);
}

// Check the century of my specific age
let century;
const birthYear = 2001;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(`Your birthday century is ${century}`);

// Exercise Practice
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(`BMIMark is ${BMIMark}`);
console.log(`BMIJohn is ${BMIJohn}`);

if (BMIMark > BMIJohn){
    console.log("BMIMark's is higher than BMIJohn....");
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})`);
}else{
    console.log("BMIJohn's is higher than BMIMark....");
    console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})`);
}

// Type conversion
const inputYear = '1998';
console.log(inputYear);
console.log(typeof inputYear);
console.log(Number(inputYear));
console.log(typeof (Number(inputYear)));
console.log(String(23), 23);

// Type coercion
const n = '1' + 1 + "2";
console.log(n, typeof n);
const m = '112' - 1;
console.log(m, typeof m);
const z = '112' - 1 + '11';
console.log(z, typeof z);