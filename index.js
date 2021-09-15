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