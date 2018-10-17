const somePromise = new Promise((resolve, reject) => {
    // If everything went well run fire resolve 
    resolve('Hey it worked!');

    // If not run reject instead
    reject('Hey, something went wrong');
});

somePromise.then(
    (message) => {
        console.log('Success: ', message);
    },
    (errorMessage) => {
        console.log('Error: ', errorMessage);
    }
);