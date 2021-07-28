// Difference between var, let and const?
// print single line in console
console.log('video3');
// always try to use back ticks in declaration of string
var name = `Uamir`;
var marks = 315;
var channel;

console.log(name, marks, channel);

// how to use const
const propOwn = `Umair`;
// propOwn = `Ali`; //Uncaught TypeError: Assignment to constant variable.
console.log(propOwn);

// Jab bhe const variable declare karen gay to app ko foraan is ki value initialize karni ho ge.jesay k
// const bottle;
// Uncaught SyntaxError: Missing initializer in const declaration

// this block level scope could be in if,
let city = `ISB`;
{
let city = `Lahore`;
city = `Paptatan`;
console.log(city);
}
// Outside block level scope
console.log(city);

//using const you can change array
//but you can not re declare array in const
const array1 = [12,2,5,1,5,36];
// array1.push(225);
console.log(array1);