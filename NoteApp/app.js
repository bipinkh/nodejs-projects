console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");

const notes = require("./notes.js");

//list all the arguments
console.log(process.argv);

var command = process.argv[2];
console.log(`command : ${command}`);

if (command == 'add'){
    console.log(`adding new note`);
    
}else if (command == 'list'){
    console.log(`listing all notes`);

}else if (command == 'read'){
    console.log(`fetching note`);

}else if (command == 'remove'){
    console.log('removing note');

}else {
    console.log('commad not recognized');
}