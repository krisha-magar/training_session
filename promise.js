// //example 1
// const getHelloWorldPromise = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Hello World");
//         reject("There was some error");
//     });
// };
// //calling the function
// getHelloWorldPromise().then((result) => {
//     console.log("Success: ",result);
// })
// .catch((error) => {
//     console.log("Error: ",error);
// });
// //example 2
// const getUserList = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             //resolve(["Sherlock", "Rick"]);
//             reject("There was some error fetching students data.");
//         }, 5000);
//     });
// };

// getUserList().then((students) => {
//     console.log("Success: ",students);
// })
// .catch((error) => console.log(error))//Single line .catch callback 
// .finally(() => console.log("Request completed")); // arguement is always empty in finally.

// const getValue = () => {
//     //return Promise.resolve("This is resolved");
//     return Promise.reject("This is rejected");
// };

// getValue()
// .then((value) => {
//     console.log(value)
// })
// .catch((error) => {
//     console.log(error)
// })

//Promise all 
const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1");
    }, 2000);
});

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2");
    }, 2000);
});


// Promise.all([promise1(), promise2()])
// .then((result) => {
//     console.log("Promise all: ", result);
// })
// .catch((error) => {
//     console.log("Error: ", error);
// });

//Promise race
Promise.race(([promise1(), promise2()]))
.then((result) => {
    console.log("Result: ", result);
})
.catch((error) => {
    console.log("Error: ", error);
})

//Another example of Promise race
const yahooWeather = () => 
    new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({
                kathmandu: 19,
            });

        }, 1000);
    });
    const googleWeather = () => 
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                kathmandu: 19,
            });

        }, 1000);
    });
