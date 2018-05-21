console.log("Starting notes.js");

var addNote = (title, body) => {
    console.log(` adding note.\n title = ${title}. \n body = ${body}.`)
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