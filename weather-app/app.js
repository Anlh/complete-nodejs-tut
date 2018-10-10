const request = require('request');
const {KEY_NAME} = require('./KEY');
const yargs = require('yargs');


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const ENCODED_ADDRESS = encodeURIComponent(argv.a);


request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY_NAME}&location=${ENCODED_ADDRESS}`,
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