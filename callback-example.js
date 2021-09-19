// const makeStringUpperCase = (string) => {
//     return string.toUpperCase();

// }

// const makeStringLowerCase = (string) => {
//     return string.toLowerCase();
// }
// const passUserInput = (input, callback) => {
//     input = "hello " + input;
//     return callback(input);
// }
// console.log(passUserInput("IIMS", makeStringLowerCase));
// console.log(passUserInput("iims", makeStringUpperCase));

// const padString = (string) => {


// }
//one line special function for callback
const add = (a , b) => a + b;
const subtract = (a , b) => a - b; 
const multiply = (a , b) => a * b;

const callBackExample = (a , b , mathCallBack) => {
    console.log(mathCallBack(a , b));
}
callBackExample(2 , 2, add);
callBackExample(2 , 2, multiply);
callBackExample(2 , 2, subtract);

// //Use of parseInt,
// let a = "1";
// let b = "2";
// console.log( parseInt(a) + parseInt(b));

//Operators
let a = 4;
let b = 5;
//a += a;
a += b;
console.log("The sum of a and b is", a);