//IF else statement
//Agar magar
//https://www.youtube.com/watch?v=vaZpDYOuprA&list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL&index=8

// = Single equal to is not going to use in comparison operator
// == is Assignment operator it will be use.
// === is used when both data type and value will be compare


// And operator &&
// Or operator ||

const age = 65;
const height = 562;

if (age==19) {
    console.log('yes age is 19')
} 
// === triple equal to type and value both compare karta ha == double sirf value compare hoti ha

// && = And operator
// || = Or operator
else if (age == 65 && height == 562 ){
    console.log('Age is 65')
}
else {
    console.log('age is not 19')
}

//turniary operator
console.log(age==45,'its 45')

//Switch case statements
const ages =55;
switch (ages) {
        case 18:
        console.log('you are 18')
        //we use break ta k bhol jye case value
        break;
        case 19:
        console.log('you are 19')
        break;

    default:
        console.log('Dontknow')
        break;
}


