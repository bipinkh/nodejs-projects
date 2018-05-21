//---------------- TASK 1: ---------------
//
//var obj = {
//    name: 'Andrew'
//}
//
//var stringObj = JSON.stringify(obj);
//
//console.log(typeof stringObj);
//console.log(stringObj);
//console.log(obj['name']);
//console.log(stringObj['name']);


//---------------- TASK 2: ---------------
//
//var personString = '{"name":"Andrew", "age":25}';
//var personJson = JSON.parse(personString);
//console.log(personJson.name);
//console.log(personString.name); //undefined


//---------------- TASK 3: ---------------

const fs = require('fs');

var originalNote ={
    title: 'Some Title',
    body: "Some body here"
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
console.log(note.body);

console.log(typeof originalNoteString);
console.log(originalNoteString);


