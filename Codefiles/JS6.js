//
console.log('In JS6')

//string concatenation
const name = 'Uamir';
const newVal = ' Good Boy';
console.log(name + newVal);

//concat
let html;
html = "<h1>this is Umair from Pak</h1>"+ "<h2>this is h2 <h2>"

//how to use concat function of string
html = html.concat('this','what');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase);
console.log(html.toUpperCase);

console.log(html[1]);

console.log(html.indexOf('h1'));
console.log(html.indexOf('slkdslh1'));


console.log(html.charAt(3));

console.log(html.endsWith('slkdslh1'));

console.log(html.includes('imair'));

console.log(html.substring(1,20));

console.log(html.slice(1,4));

//split the string and return string in an array
console.log(html.split(' '));

console.log(html.replace("this","it"));

//template literals
let tool1= 'hammer';
let tool2 = 'nail';
let newToolbox = `Bonjour ${name}
<h1>this is Umair tool box</h1>` ;

//now display in DOM
document.body.innerHTML = newToolbox;