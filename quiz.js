const readlineSync = require('readline-sync');

const userName = readlineSync.question("What is your name? ");
console.log(`Hello, ${userName}! Welcome to the quiz.`);

const question1 = readlineSync.question("What is the data type used to represent true or false values? ");
console.log(`You answered: ${question1}`);

const question2 = readlineSync.question("What is the operator used to concatenate two strings? ");
console.log(`You answered: ${question2}`);

const question3 = readlineSync.question("What is 15 divided by 3? (Enter a number): ");
console.log(`You answered: ${question3}`);

const question4 = readlineSync.question("What is the value of a variable that has been declared but not assigned a value? ");
console.log(`You answered: ${question4}`);

const question5 = readlineSync.question("What is the result of '8' + 2 in JavaScript? ");
console.log(`You answered: ${question5}`);

console.log(`\nHere are your answers, ${userName}:`);
console.log(`1. ${question1}`);
console.log(`2. ${question2}`);
console.log(`3. ${question3}`);
console.log(`4. ${question4}`);
console.log(`5. ${question5}`);
