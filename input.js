let connection;
// require('./play');


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

// stdin.on('data', key => {
//   let w = 'up';
//   console.log(w);
// });


const handleUserInput = function(data) {
  const stdout = process.stdout;
  // process.stdout.write(key);
  if (data === '\u0003') {
    process.exit();
  }

  if (data === 'w') {
    connection.write('Move: up');
  }

  if (data === 'a') {
    connection.write('Move: left');
  }

  if (data === 's') {
    connection.write('Move: down');
  }

  if (data === 'd') {
    connection.write('Move: right');
  }

  if (data === 'm') {
    connection.write('Say: HELLO!');
  }

  if (data === 'k') {
    connection.write('Say: Sneaky sneks sneak');
  }

};


module.exports = { setupInput };