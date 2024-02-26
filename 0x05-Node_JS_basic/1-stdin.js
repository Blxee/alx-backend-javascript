const readline = require('readline');

console.log();
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question('Welcome to Holberton School, what is your name?\n', (line) => {
  console.log(`Your name is: ${line}`);
  console.log('This important software is now closing');
  reader.close();
});
