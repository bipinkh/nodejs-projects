console.log("Starting notes.js");

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    
    try{
        var noteString = fs.readFileSync("notes-data.json");
        notes = JSON.parse(noteString);
    }catch(e){
        // do nothing if there is no file, or the file is empty or the file has non json format value
    }
    
    var duplicateNotes = notes.filter(
        (note) => {
        return note.title == title;
    }
    );
    
    if (duplicateNotes.length ==0){
         notes.push(note);
        fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    }
   
};

var getAll = () => {
    console.log("getting all notes");
}

var getNote = (title) => {
    console.log(`reading note : ${title}`);
}

var removeNote = (title) => {
    console.log(`removing note: ${title}`);
}

module.exports ={
    addNote,
    // or, can just write "addNote: addNote" also.
    getAll,
    getNote,
    removeNote
}