const getUser = (id, callback) => {
    const userObj = {
        id: id,
        name: 'Helder Ferreira'
    };
    setTimeout(() => {
        callback(userObj);
    }, 3000)
};


getUser(1, user => {
    console.log(user);
});