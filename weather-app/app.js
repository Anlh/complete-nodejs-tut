const request = require('request');


request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=ark7A5XuklLU9nAr0WPvUsGb5RAkMmIj&location=rua%20carreira%20229%20rio%20tinto',
    json: true
}, (error, response, body) => {
    // Pretty printing objects
    console.log(JSON.stringify(body, undefined, 2));
});