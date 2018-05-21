console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

//list all the arguments
//console.log(process.argv);

console.log(yargs.argv);

var argv = yargs.argv;
var command = argv._[0];


/* --------------- ADD A NOTE ----------------- */
if (command == 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log("note created \n");
        console.log(`Title : ${note.title} \n`);
        console.log(`Body : \n${note.body}`);
    } else{
        console.log("duplicate title exists");
    }
    
/* --------------- LIST NOTES ----------------- */

}else if (command == 'list'){
    notes.getAll();

/* --------------- READ A NOTE ----------------- */

}else if (command == 'read'){
 notes.getNote(argv.title);
    
/* --------------- REMOVE A NOTE ----------------- */

}else if (command == 'remove'){
    var deleted = notes.removeNote(argv.title);
    var message = deleted ? "Note removed !" : "Note not found.";
    console.log(message);
    
}else { 
    console.log('commad not recognized');
}