// type conversion and type coercion
console.log('wellcome to JS5');
let newVar;
newVar = 34;
// now convert this digit into string by using string function
newVar = String(newVar);
console.log(newVar, typeof newVar);

//convert boolean into string
newBool = String(true);
console.log(newBool, typeof newBool);


//how to convert date into string
let date = new Date();
newDate = String(new Date());
console.log(date,typeof date);
console.log(newDate, typeof newDate);

//how to convert arry into string
let oneArray = [1,2,3,5,3,5,6];
//When use lenth function as an array it will return 7 now see what will be output as string
console.log(oneArray.length);
//now first convert into string and check the lenth
oneArray = String([1,2,3,5,3,5,6]);
console.log(oneArray.length);// now its out is 13 it will count all element not 


//tostring method
let i = 8;
console.log(i,toString());

//Number to String 
//String to Number
//NaN -- Its not a number

let str = "525645";
console.log(str);

//parseInt
//parseFloat
//.toFixed

let newVal = 45521.3256;
console.log(newVal)


