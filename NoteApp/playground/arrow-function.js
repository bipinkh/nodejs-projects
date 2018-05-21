//var square = (x) => x*x ;
//or
var square = x => x*x ;
//or
//var square = (x) => {
//    return x*x 
//};

console.log(square(9));



var user = {
    name: "Andrew",
    sayHi: () => {
        console.log(arguments); // no result
        console.log(`Hi ${this.name}`); //returns undefined
    },
    sayHiAlt(){
    console.log(`Hi, I am ${this.name}`);
            console.log(arguments);    //works

    }
};

user.sayHi(1,2);
user.sayHiAlt(1,2);