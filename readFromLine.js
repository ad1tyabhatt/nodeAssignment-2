const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter your name:", function(name) {
  console.log("Hello", name);

  rl.close();
});












