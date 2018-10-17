const request = require('request');
const KEYS = require('../API_KEYS.json');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${KEYS['dark-sky-api-key']}/${lng},${lat}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather!');
        }
    })
};

module.exports = {
    getWeather
};
