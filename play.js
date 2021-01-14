
const connect = require('./client');

console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', key => {
    handleUserInput(key)
  });

  return stdin;
};

const handleUserInput = function(key) {
  // process.stdout.write(key);
  if (key === '\u0003') {
    process.exit();
  }
}


setupInput();
