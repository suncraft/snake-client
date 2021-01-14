const net = require('net');
const { IP, PORT } = require('./constants');


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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

  return conn;
};

// const connect = client;

// module.exports = client;
module.exports = { connect };




//  conn.on('connect', () => {
//     conn.write('Move: up');
//     // conn.write('Move: left');
//     // conn.write('Move: down');
//   });

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write('Move: left');
  //   }, 1000);
  // });

  // conn.on('connect', () => {
  //   setInterval(() =>
  //     conn.write('Move: up'), 50);
  // });