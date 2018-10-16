const request = require('request');
const fs = require('fs');
const KEYS = require('../API_KEYS.json');

const geocodeAddress = (address, callback) => {
    const ENCODED_ADDRESS = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEYS["geolocation-api-key"]}&location=${ENCODED_ADDRESS}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to maquestapi servers.')
        } else {
            const {
                lat,
                lng
            } = body.results[0].locations[0].latLng;

            callback(undefined, {
                latitude: lat,
                longitude: lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;