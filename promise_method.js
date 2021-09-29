const getDogApiV1 = () => {
  return new Promise((resolve, reject) => {
    request(
      "https://dog.ceo/api/breeds/image/random",
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

const getDogApiV2 = () => {
  return new Promise((resolve, reject) => {
    request(
      "https://dog.ceo/api/breeds/image/random",
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

Promise.all([getDogApiV1(), getDogApiV2()])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));