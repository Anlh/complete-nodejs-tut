console.log('Starting notes.js');

const fs = require('fs');


// Read data from notes-data.json file
const fetchNotes = () => {
    try {
        // Check if the notes-data.json exists or if its corrupted
        // If it is returns an error, this try block is ignored, and the notes variable will still be an empty array
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        // Let's return an empty array if anything on try block fails
        return [];
    }
};

// Write notes data to the notes-data.json file
const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    const newNote = {title, body};
    let notes = fetchNotes();
    // Check for duplicate note titles
    let duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(newNote);
        saveNotes(notes);
        return newNote;
    }
};


const listNotes = () => {
    const notes = fetchNotes();
    console.log('Listing all notes', notes);
};

const getNote = (title) => {
    const notes = fetchNotes();
    const noteSelected = notes.filter(note => note.title === title);

    return noteSelected[0];
};

const deleteNote = (title) => {
    const notes = fetchNotes();
    const newNotes = notes.filter(note => note.title !== title);
    saveNotes(newNotes);
    return notes.length !== newNotes.length;
};

module.exports = {
    addNote,
    listNotes,
    getNote,
    deleteNote
};