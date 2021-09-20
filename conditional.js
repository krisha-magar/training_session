const age = 10;
if (age <= 20) {
    console.log('You are in teen age.');
} else if (age > 20 && age <=29) {
    console.log("You are in your twenty's");
}else{
    console.log('You are old.');
}

let day = "sunday";

switch (day) {
    case "monday":
        console.log("It is Monday.");
        break;
    case "tuesday":
        console.log("It is Tuesday.");
        break;
    case "wednesday":
        console.log("It is Wednesday.");
        break;
    case "thursday":
        console.log("It is Thursday.");
        break;
    case "Friday":
        console.log("It is Friday.");
        break;
    default:
        console.log("Invalid day name.");
}
//while loop
let counter = 0;
while (counter <= 10) {
    console.log("value of counter is ", counter);
    counter++;
}

for(let i = 0; i < 10; i++) {
    console.log("Value of i is ", i);
}