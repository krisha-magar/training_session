function exampleFunction(firstName,lastName) {
    return first+ " " + lastName;
}

//ecma 6
const exampleNew = () => {
    return "hello world";

}

const getFullName = (firstName, lastName) => firstName.toUpperCase() + " " + lastName.toUpperCase();


function printOut(content){
    console.log(content);
}

printOut("hello world");

const arrowPrintOut = (content) => console.log(content);

arrowPrintOut("Arrow hello world");

let car = {
    name: "toyota",
    model: "M10",
    price: 30032,
    getNameInUpperCase: function() {
        return this.name.toUpperCase();
    },
    getTotalPriceWithVat: function(){
        return (13/100 * this.price) + this.price;
    }
}

console.log(car);
console.log(car.getNameInUpperCase());
console.log(car.getTotalPriceWithVat());