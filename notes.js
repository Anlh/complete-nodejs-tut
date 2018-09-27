console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
    const newNote = {title, body};
    let notes = [];

    try {
        // Check if the notes-data.json exists or if its corrupted
        // If it returns an error, this try block is ignored, and the notes variable will still be an empty array
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
        // I could do something to recover from the error thrown, but ill not do anything...
    }

    // Check for duplicate note titles
    let duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length > 0) {
        console.log('There is already a note with that title stored!')
    } else {
        notes.push(newNote);
    }


    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const listNotes = () => {
    const notes = JSON.parse(fs.readFileSync('notes-data.json'));
    console.log('Listing all notes', notes);
};

const getNote = (title) => {
    console.log('Reading note');
    return notes;
};

const deleteNote = (title) => {
    console.log('Deleting note');
    // delete note
};

module.exports = {
    addNote,
    listNotes,
    getNote,
    deleteNote
};