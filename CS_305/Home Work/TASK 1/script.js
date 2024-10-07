// Data Types:
// 1.Create a string, number, boolean, undefined, null, symbol, and bigint variable.
// 2.Print each variable type using typeof.

// 1
let name = 'Polad'
let age = 18
let tru = true
let mexfi 
let nul = null
let yeni = Symbol("yeni")
let yeni2 = 20n

// 2
console.log(typeof name);
console.log(typeof age)
console.log(typeof tru)
console.log(typeof mexfi)
console.log(typeof nul)
console.log(typeof yeni)
console.log(typeof yeni2)


// Keywords:
// 3.Use let, const, and var to declare variables and explain their differences with examples.

// When we use "let", we can change the value we give later. But we don't write "let" the second time.
let city = 'baku'
console.log(city);
city = 'bakuu'
console.log(city);
// baku
// bakuu

// "var" allows you to revalue, unlike "let" and "const"
var username = "Polad"
var username = "Polad06"
console.log(username);
// Bayramli

// When specifying a value with "const", the value cannot be changed
const school = "UNEC"
console.log(school);
// UNEC


// Backticks (Template Literals):
// 4.Use backticks to create a dynamic message that includes (firstName,lastName,age,country,hobby,occupation) variables.
// (e.g.)
// let address = 'Nizami';
// let num = 12;
// console.log(`My address is ${address} Street, building number ${num}.`);

const firstName = "Polad"
const lastName = "Bayramli"
let age1 = 18
let country = "Azerbaijan"
let hobby = "play game"
let occupation = "learn cyber"
console.log(`My name is ${firstName}, my surname is ${lastName} and I am ${age}. I am from ${country}. My hobby is ${hobby} and my occupation is ${occupation}`);


//  Operators:
// 5.Use arithmetic operators (+, -, *, /, %).
// 6.Use comparison operators (==, ===, >, <, etc.)
// 7.Use logical operators (&&, ||, !).

// 5
console.log(5 + 5); //10
console.log(5 + "5"); //55
console.log(10 - 5); //5
console.log(15 - "5"); //10
console.log(5 * 5);  //25
console.log(5 * 5);  //25
console.log(15 / 5); //3
console.log(17 % 5); //2

//6
let a = 5;
let b = '5';

console.log(a == b);  // True, because == doesn't check for type

console.log(a === b); // False, because === checks for both value and type

let c = 10;
let d = '10';

console.log(c != d);  // False, because != doesn't check for type

console.log(c !== d); // True, because !== checks both value and type

let x = 7;
let y = 3;

console.log(x > y);   // True, 

console.log(y < x);   // True, 

console.log(x >= 7);  // True, 

console.log(y <= 3);  // True, 

//7
 a = 5;
 b = 10;
 c = false;

// AND (&&)
// Both conditions must be true for the result to be true
if (a > 3 && b < 15) {
  console.log("Both conditions are true!");  // This will run because 5 > 3 and 10 < 15
}

// OR (||)
// At least one of the conditions must be true for the result to be true
if (a > 6 || b < 15) {
  console.log("At least one condition is true!");  // This will run because b < 15
}

// NOT (!)
// Negates the value (true becomes false, false becomes true)
if (!c) {
  console.log("c is false");  // This will run because c is false and !c is true
}

// Combining logical operators
if ((a > 3 && b > 8) || c) {
  console.log("Complex condition met!");  // This will run because (a > 3 && b > 8) is true, even though c is false}
}



