console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
// let command = process.argv[2];
// console.log('Command: ', command);
// console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

const inputTitle = argv.title;
const inputBody = argv.body;
const command = argv._[0];

if (command === 'add') {
    notes.addNote(inputTitle, inputBody);
} else if (command === 'list') {
    notes.listNotes();
} else if (command === 'read') {
    notes.getNote(inputTitle);
} else if (command === 'delete') {
    notes.deleteNote(inputTitle);
} else {
    console.log('Command not recognized');
}

