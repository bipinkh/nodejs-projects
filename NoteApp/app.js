const fs = require("fs");
const yargs = require("yargs");

const notes = require("./notes.js");

const command_options = {
    titleOption: {
                    describe: 'title of note',   //what is supposed to be passed in 
                    demand: true,                //must needed is true
                    alias: 't'                   // shortcut for --title
                },
    bodyOption: {
                    describe: "body of the text",
                    demand: true,
                    alias: 'b'
    }
}

const argv = yargs
            .command('add','Add a new note', {  title: command_options.titleOption, body: command_options.bodyOption  })
            .command('list', 'list all nodes')
            .command('read', 'read a note',{  title:command_options.titleOption  })
            .command('remove','remove a note',{  title:command_options.titleOption  })
            .help()
            .argv;

var command = argv._[0];


/* --------------- ADD A NOTE ----------------- */
if (command == 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log("note created \n");
        notes.logNote(note);
    } else{
        console.log("duplicate title exists");
    }
    
/* --------------- LIST NOTES ----------------- */

}else if (command == 'list'){
    var allnotes = notes.getAll();
    console.log(`printing ${allnotes.length} note(s).`);
    allnotes.forEach(
    (note) => notes.logNote(note)
    );

/* --------------- READ A NOTE ----------------- */

}else if (command == 'read'){
 var note = notes.getNote(argv.title);
    if (note){
        console.log("note found \n");
        notes.logNote(note);
    }else{
        console.log("note not found");
    }
    
/* --------------- REMOVE A NOTE ----------------- */

}else if (command == 'remove'){
    var deleted = notes.removeNote(argv.title);
    var message = deleted ? "Note removed !" : "Note not found.";
    console.log(message);
    
}else { 
    console.log('commad not recognized');
}