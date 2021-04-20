require('dotenv').config();

let name = process.env.NAME;
let age = process.env.AGE;
let city = process.env.CITY;

console.log(`${name} lives in ${city}. He is ${age} years old.`)

