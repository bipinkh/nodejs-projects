console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

//list all the arguments
//console.log(process.argv);

console.log(yargs.argv);

var argv = yargs.argv;
var command = process.argv[2];


if (command == 'add'){
    notes.addNote(argv.title, argv.body);
    
}else if (command == 'list'){
    notes.getAll();

}else if (command == 'read'){
 notes.getNote(argv.title);
    
}else if (command == 'remove'){
    notes.removeNote(argv.title);

}else {
    console.log('commad not recognized');
}