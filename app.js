console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

let command = process.argv[2];

console.log('Command: ', command);
console.log('Arguments: ', process.argv);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'delete') {
    console.log('Deleting note');
} else {
    console.log('Command not recognized');
}

