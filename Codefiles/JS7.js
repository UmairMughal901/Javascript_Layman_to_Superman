console.log('we are in JS 7');

//Let make an array
const marks = [21,25,156,125,92,12,63];
const fruits = ['Orange','Apple','Pineapple'];
const mixedarr = ['str', 56, [3,5]];

const arr = new Array(35,253,12,'Orange');
console.log(arr);
console.log(mixedarr);
console.log(fruits[1]);

//property  and method

//what is property
console.log(arr.length);
console.log(Array.isArray('ajdlas'));

//how to change the array valye
arr[1] = 'Umair'
console.log(arr);

//mutating or modifying array
let uaray = [12,25,25,3,2];
//push is used to add value in end
uaray.push(1003234561);
//Add value in start
uaray.pop(12);
//Shift will show same array
//uaray.shift();
//uaray.splice(2,3);
//reverse method
uaray.reverse();
console.log(uaray);


//now talk about object
let newObj = {
    name : 'Ford',
    manufacture : 'Hanery',
    isActive : true,
    engine : [1235,1238,253]
}

console.log(newObj);
console.log(newObj['tyers']);
console.log(newObj.tyers);