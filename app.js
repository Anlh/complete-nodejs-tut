console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
// let command = process.argv[2];
// console.log('Command: ', command);
// console.log('Process: ', process.argv);
// console.log('Yargs: ', argv);

const inputTitle = argv.title;
const inputBody = argv.body;
const command = argv._[0];

if (command === 'add') {
    let note = notes.addNote(inputTitle, inputBody);

    if (note) {
        console.log('Your note has been created with success!');
        console.log('---');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Sorry but there is already one note with that title, try another one');
    }

} else if (command === 'list') {
    notes.listNotes();
} else if (command === 'read') {
    const noteSelected = notes.getNote(inputTitle);
    const message = noteSelected ? noteSelected : 'Your note was not found';
    console.log(message);
} else if (command === 'delete') {
    const noteIsDeleted = notes.deleteNote(inputTitle);
    const message = noteIsDeleted ? 'Your note has been deleted with success!' : 'Sorry but the note with that title doesn\'t exist';
    console.log(message);
} else {
    console.log('Command not recognized');
}

