// Primtive Data types
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F48304498%2Fare-wrappers-of-a-primitive-type-primitives-types-too&psig=AOvVaw1RD3xKL6qvKV1V7RhXUXA_&ust=1634021065407000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiFqPvgwfMCFQAAAAAdAAAAABAR
//String
var name = `Umair Asghar`;
console.log(typeof name, name);

// Numbers
var anynum = 35;
console.log(typeof anynum, anynum);

// Boolean
let istea = true;
console.log(typeof istea, istea);

// Null is primtive data type- it returns bogous return object value
let nullValue = null;
console.log(typeof nullValue, nullValue);


//UNdefiend
let undef = undefined;
console.log(typeof undef, undef);

//Reference Data Types

//Arrays
let myarray = [1,2,3,4,5,6,7,"String",false];
console.log(typeof myarray, myarray);

//Object Literals
let salary = {
    umair : 1000000,
    ali: 80000,
    waqas:5565816
}
console.log(typeof salary);

// function
function findsalary(params) {
    
}
console.log(typeof findsalary);

//Date
let date = new Date();
console.log(typeof date);
console.log(date);