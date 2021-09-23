let people = {
    name: "john",
    age: 20,
    address: "Kathmandu"
};

delete people.address;

//iterators
let countryArray = ["nepal", "india", "japan"];
for (let country of countryArray) {
    console.log(country);
}

//iterators for objects
let objectExample = {
    name: "Joe",
    age: 89,
    address: "KTM"

};
for(let obj in objectExample) {
    console.log(objectExample[obj]);
}

console.log(Object.keys(objectExample));