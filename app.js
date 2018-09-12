console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Helder'));

const filteredArray = _.uniq(['Helder', 'Isabel', 2, 2, 'Helder']);

console.log(filteredArray);