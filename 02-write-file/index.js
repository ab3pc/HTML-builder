const { stdin, stdout } = require('process');
const fs = require('fs');
const path = require('path');
//const readline = require('readline');

const newFile = path.join(__dirname, 'file.txt');
const output = fs.createWriteStream(newFile);

stdout.write('Hello, write some text.\n');
stdin.on('data', (data) => {
  const str = data.toString();
  if (str.trim() === 'exit') {
    stdout.write('I\'m out, bye!\n');
    process.exit();
  } else {
    output.write(data);
  }
});

process.on('SIGINT', () => {
  console.log('Have a nice day!');
  process.exit();
});
