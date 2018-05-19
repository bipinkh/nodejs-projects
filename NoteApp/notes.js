console.log("Starting notes.js");
//console.log(module);

module.exports.age = 25;

//module.exports.addNote = function(){}
module.exports.addNote = () => {
    console.log("add note function is called");
    return "New note.";
}

module.exports.addNumbers = (a, b) => {
    return (a+b);
}