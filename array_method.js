let exampleArray = [1, 2, 3, 4, 5];
console.log(exampleArray.length);
console.log(exampleArray[exampleArray.length-1]);

exampleArray[0] = "hello world";
exampleArray[2] = "test";
console.log(exampleArray);

let array1 = ["apple" , "orange"];
let array2 = ["mango" , "grape"];
console.log([...array1, ...array2]);

let object1 = {
    name: "John",
    age: 21,
};

let object2 = {
    address: "Hetauda",
    college: "IIMS",
};
let object3 = {...object1, ...object2};

let {name, age, address, college} = object3;

console.log(name, age, address, college);

//push - if we have to add an object in the last place of array.
let pushExample = ["apple", "banana"];
pushExample.push("orange");
console.log(pushExample);

//pop
let popExample = ["apple", "banana"];
popExample.pop();
console.log(popExample);

//unshift
let unshiftExample = ["apple", "grape"];
unshiftExample.shift("orange");
console.log(unshiftExample);

//shift
let shiftExample = ["apple", "banana"];
shiftExample.shift();
console.log(shiftExample);

//splice
let spliceExample= ["apple", "banana"];
spliceExample.splice(1, 0, "orange", "avacado");
console.log(spliceExample);

//slice
let sliceExample = ["apple", "banana", "avocado", "grape"];
// delete sliceExample[0];
// console.log(sliceExample);
let newSliceExample = sliceExample.slice(1, 3);
console.log(newSliceExample);
console.log(sliceExample);

//Loop
//forEach Loop
//sliceExample.forEach(   (

//map 
let numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.map((value, index) => {
    return value * 2;
});


console.log(newNumbers);

let userName = ['krisha', 'ujjwal', 'krishna','lachhu', 'krish'];
let upperCaseName = userName.map((value, index) => {
    return value.toUpperCase();
});

console.log(upperCaseName);

//filter example
let agesArray = [15, 20, 30, 20.5];

let aboveTwenty = agesArray.filter((age) => {
    return age > 20;
})

console.log(aboveTwenty);

let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}