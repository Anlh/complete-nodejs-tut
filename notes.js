console.log('Starting notes.js');

const notes = [];

const addNote = (title, body) => {
    const newNote = {title, body};
    console.log('Adding new note', title, body);

    notes.push(newNote);

    return newNote;
};

const listNotes = () => {
    console.log('Listing all notes');
    return notes;
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