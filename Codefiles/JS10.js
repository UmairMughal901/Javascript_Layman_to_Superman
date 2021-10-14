console.log("JS tutorial 10")
//https://www.youtube.com/watch?v=dsV07zIGfc4&list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL&index=10
//These is related to functions and scope 

// WHat is a function 
// koi bhe kaam karne k lye jo bar bar karne ki zarorat ho to app ek function bana lyn.  pe karna ho

// let name = 'Uamir';
// let name2 = 'Ali';


// // Write fucntion 
// const mygreeting = function (name, thank = 'default thanks') {
//     let msg = `Happy Birthday ${name} I wish nothing but good things on your birthday. May the shine bright for you. Wishing you a wonderful day and all the most amazing things on your Birthday! ${thank}!`;
    
//     return msg;
// }

// //call function
// //greetingFun(name, 'Thanks a lot');

// // console.log(`Happy Birthday ${name} I wish nothing but good things on your birthday. May the shine bright for you. Wishing you a wonderful day and all the most amazing things on your Birthday! `);

// // console.log(`Happy Birthday ${name2} I wish nothing but good things on your birthday. May the shine bright for you. Wishing you a wonderful day and all the most amazing things on your Birthday! `);

// //FUnction which returns some value
// let val = mygreeting(name);
// console.log(val);


// //this oop convept
// //create an object
// const objnew = {
//     name : "Skillif",
//     game : function(){
//         return "Need for Speed"
//     }
// }
// console.log(objnew.game());


// arr = ['fruit', 'vegetabel', 'furniture'];

// arr.forEach(function(element, index, array) {
//     console.log(element, index, array)
// });

// Scope
if(1){
    //if use Let error will through JS10 .js:50 Uncaught //ReferenceError: Let is not defined
    var i = 236;
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `THis is ${name} 's ui`;
}

console.log(ui("Umair"), i);