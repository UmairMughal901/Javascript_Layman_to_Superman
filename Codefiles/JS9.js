console.log("This is tutoial 9")

// This tutoial 

// loops is an instuction jab tak ek specific condition false na ho jye

// In any programming language will have 3 type of loop
// 1. for loop
// 2. while loop
// 3. do while loop

// explanation of for loop

// Why we use i++
// let a = 253;
// // a +=1;
// a ++;
// console.log(a);

for (let i = 0; i < 10; i++) {
    
    console.log(i);
    
}

// WHere will we use for loop


// WHILE LOOP
console.log("this is while loop starts here");

let j = 0;
while (j<10){
    console.log(j);
    // provide condition to stop the loop
    j += 1;
}

//DO WHILE LOOP - DO WHILE LOOP AND WHILE ARE ALMOST 
console.log("DO WHILE STARTS HERE");

let k = 0;
do {
    console.log(k+1);
     k += 1;
} while (k< 10);

// BREAK AND CONTINUE
// THERE ARE TWO STATEMENTS IN LOOP 

let g = 0;
do {
    console.log(k+1);
    if(g===5){
        break;
    }
    g += 1;
} while (g< 10);
console.log("do while loop stoped with break")

//CONTINUE - move to next loop iteration.
// when you want to skip any value

let w = 0;
do {
    
    if(w===5){
        w += 1;
        continue;
    }
    console.log(w+1);
    w += 1;
} while (w< 10);
console.log("do while loop stoped with break with contiue - six is missing")

console.log("for each loops starts here");

let arr = ["umar", "umair", "ali" ,6,5,2,7,9];
arr.forEach(function noname(element, index, array) {
    console.log(element, index, array);
    
})

let obj = {
    name : "Umair Asghar",
    age : 85,
    type: "GIS Programmer",
    OS: "Kali lInux"
}

//if i want to itrate object
for(let key in obj){
    console.log(obj[key])
}

