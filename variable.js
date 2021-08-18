//1. Use Strict
//added in ES 5
//use this for Valina Javascript
'use strict';


//2. Variable
//let (added in ES6)

let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

//var(don't ever use this!)
//var hoisting(move declaration from bottom to top)
//has no block scope
{
console.log(age);
age = 4;
console.log(age);
var age;
}

console.log(age);


//3. Consants
//favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes
const datsInWeek = 7;
const maxNumber = 5;
// mutable type -> let
// immutable type -> const


//4. Variable types

//primitive, single item: number, string, boolean, null, undefied, symbol
//object, box container
//function, first-class function
const count = 17; //integer
const size = 17.1; //demical number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


const infinity = 1/0;               //infinity
const negativeInfinity = -1/0;      //negativeINfinity
const nAn = 'not a number' / 2;     //NaN
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt},type: ${typeof bigInt}`);

//String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello '+brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; //template literals (String)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);



