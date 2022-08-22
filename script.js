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