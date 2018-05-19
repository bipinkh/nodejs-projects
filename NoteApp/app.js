console.log("Starting app.js");
const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes.js");
var user = os.userInfo();


// Task : Using lodash modules:

//console.log(_.isString(true));
console.log(_.isString("hello lauren bro !"));
//console.log(_.isString(1));
//
//var filteredArray = _.uniq(['Bipin',1,'Bipin',1,2,3,4])
//console.log(filteredArray);


//Task 0:

////call function
//var res = notes.addNote();
//console.log(res);



// Task 1:

//call function with arguments
//var sum = notes.addNumbers(3,4);
//console.log(sum);
//var sum2 = notes.addNumbers(3,-2);
//console.log(sum2);
//console.log(notes.addNumbers(10,-20));


// Task 2 :

//fs.appendFile('greetings.txt',`hello ${user.username}, you are ${notes.age}. \n`, function(err){
//    if(err){
//        console.log("unable to write to file");
//    }
//});
// note that tilde sign is used in string template

//console.log(user);  //this prints uid,gid,username,homedir,shell

// in newer version 
// fs.appendFileSync("greetings.txt","hello world, this is awesome");
