console.log("Starting notes.js");

const fs = require('fs');

var fetchNotes = () => {
    try{
        var noteString = fs.readFileSync("notes-data.json");
        return JSON.parse(noteString);
    }catch(e){
        // do nothing if there is no file, or the file is empty or the file has non json format value
        return [];
    }
}

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter(
        (note) => {        return note.title == title;      }
    );
    
    if (duplicateNotes.length ==0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
   
};

var getAll = () => {
    console.log("getting all notes");
}

var getNote = (title) => {
    var notes = fetchNotes();
    //note.filter always takes a function as arguments and returns an array 
    var foundNotes = notes.filter(
    (note) => note.title === title
    );
    return foundNotes[0];
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var newNoteArray = notes.filter(
    (note) => note.title !== title );
    saveNote(newNoteArray);
    return (notes.length !== newNoteArray.length);
}

var logNote = (note) => {
    console.log(`------- \n"${note.title}" \n${note.body} \n------ `);
}

module.exports ={
    addNote,
    // or, can just write "addNote: addNote" also.
    getAll,
    getNote,
    removeNote,
    logNote
}