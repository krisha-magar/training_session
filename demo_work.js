const request = require("request");
const getUserDetail1 = () => {
    return new Promise((resolve, reject) => {
        request(
            "https://reqres.in/api/users",
            (error, response, body) => {
                if (error) {
                    reject(error);
                }
                resolve({
                    version: "v1",
                    data: body,
                });
            }
        );
    });
};
const getUserDetail2 = () => {
    return new Promise((resolve, reject) => {
        request(
            "https://reqres.in/api/users",
            (error, response, body) => {
                if (error) {
                    reject(error);
                }
                resolve({
                    version: "v2",
                    data: body,
                });
            }
        );
    });
};

//Normal Promise
getUserDetail1()
.then ((result) => {
    console.log("Details of the user", result)
})
.catch((error) => {
    console.log("Error fetching the user details", error);
});

//Promise.all
Promise.all([getUserDetail1(), getUserDetail2()])
.then ((result) => {
    console.log("Details of the users from both api", result)
})
.catch((error) => {
    console.log("Error fetching the user details", error);
});

//Promise.race
Promise.race([getUserDetail1(), getUserDetail2()])
.then ((result) => {
    console.log("Results from the first fulfilled api ", result)
})
.catch((error) => {
    console.log("Error fetching the user details", error);
});