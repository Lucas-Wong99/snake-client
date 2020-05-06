const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '50.64.116.162',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (message) => {
    console.log('Message from server', message);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to the game server!');
    conn.write('Name: LW');
    // const moves = ['Move: up', 'Move: up', 'Move: up', 'Move: up'];
    // for (let i = 0; i < moves.length; i++) {
    //   setTimeout(() => {
    //     conn.write(moves[i]);
    //   },i * 50);
    // }
  });

  

  return conn;
}

module.exports = {
  connect
};
