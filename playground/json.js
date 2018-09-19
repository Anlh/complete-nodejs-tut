// const obj = {
//     name: 'Hélder'
// };
//
// const stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(typeof obj);
// console.log(obj);

// JSON syntax
// const personString = '{"name": "Helder", "age": 28}';
// const person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
    title: 'Some Title',
    body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);
// Write to the filesystem
fs.writeFileSync('notes.json', originalNoteString);

// Read from the filesystem the object stored
const readNoteString = fs.readFileSync('notes.json');
// Parse the string to a regular object
const readNote = JSON.parse(readNoteString);
console.log(readNote);