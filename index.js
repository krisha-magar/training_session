let a = 1;
let b = "Hello World."
let c = true;
let d = 1.5;

console.log(a);
a = "IIMS"
//gives the datatype of the variable.
console.log(typeof a); 

const example = "Hello World"
console.log(example);

// undefined datatype
let iims;

console.log(iims);
let person = {
    name: 'Diane',
    age: 21,
    address: "Kathmandu",
    phone: 9855443336,
    location: {
        lat: 28.9696,
        lng: 85.5858,
    }
};
console.log("This person name is: ", person.name);
console.log("This person age is: ", person.age);
console.log("This person location latitude is: ", person.location.lat);
console.log("This person location longitude is: ", person.location.lng);

let exampleArray = Array(1,2,3,3,4,5,6,6,8,9,10);
let exampleArray2 = [1,2,3,4,6,7,8,9,10]
console.log(exampleArray);
console.log(exampleArray2);

let firstLetter = "Hello";
var secondLetter = "Wrld";
let thirdLetter = firstLetter + secondLetter;
console.log("Lenght of the third letter is: ", thirdLetter.length);

//using slice which lets us to have the particular part of the sentence or word.
let note = "I am from Hetauda";
console.log(note.slice(10, note.length));

let firstWord = "Hello ";
let secWord = "World";
let replaceWord = "IIMS";
let concatWord = firstWord.concat( secWord);
console.log(concatWord.replace ("World", replaceWord));

//change to lower case
let word = "HELLO KRISHA";
console.log(word.toLowerCase());
//chnage to upper case
let word1 = "hello universe";
console.log(word1.toUpperCase());

// trim a string and get length
let example4 = "   Hello World   ";
console.log("Length of example4: ",example4.length);
example4 = example4.trim();
console.log("Trimmed value: ", example4);
console.log("Length of example4: ",example4.length);
// toString function
let num = 22;
console.log("First:", typeof num);
num = num.toString();
console.log("Last:", typeof num);

// get substr
let str = "Hello world";
let result = str.substr(0 , 6);
console.log(result);



//get index of
let checkIndexOf = "Hi there";
console.log(checkIndexOf.indexOf("there"));

//includes of
let checkIncludes = "hello there";
console.log("check if checkIncludes includes there", checkIncludes.includes("there"));
console.log("check if checkIncludes includes world", checkIncludes.includes("world"));

//check char at
let checkCharAt = "I am from Hetauda";
console.log(checkCharAt.length);
console.log(checkCharAt.charAt(2));

let padStartExample = "Hello";
console.log(padStartExample.padStart(13, "IIMS"));

let padEndExample = "Hello";
console.log(padEndExample.padEnd(13, "IIMS"));
