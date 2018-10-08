const request = require('request');
const {KEY_NAME} = require('./KEY');

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY_NAME}&location=rua%20carreira%20229%20rio%20tinto`,
    json: true
}, (error, response, body) => {
    const lat = body.results[0].locations[0].latLng.lat;
    const lng = body.results[0].locations[0].latLng.lng;
    // Pretty printing objects
    console.log(JSON.stringify(body, undefined, 2));

    console.log(`Latitude ${lat}`);
    console.log(`----------------`);
    console.log(`Longitude: ${lng}`);
});