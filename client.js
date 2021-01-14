const net = require('net');

// const connect = function() { //wouldn't work for some reason
//would say, ReferenceError: client is not defined
const client = function() {  //was connect
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('', data); //server message
  });
  conn.on('connect', (() => {
    console.log("Sucessfully connected to game server");
  }));

  conn.on('connect', () => {
    conn.write('Name: RMZ');
  });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  //   // conn.write('Move: left');
  //   // conn.write('Move: down');
  // });

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write('Move: left');
  //   }, 1000);
  // });

  // conn.on('connect', () => {
  //   setInterval(() =>
  //     conn.write('Move: up'), 50);
  // });

  return conn;
};

// module.exports = client;
module.exports = client;