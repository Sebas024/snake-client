const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '172.20.79.236',
    port: 50541
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");


  // Notifys the user someone connected
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: SNK'); // Send the string "Name: ___" to the server

    // // Available move commands
    // const moves = ["Move: up", "Move: down", "Move: left", "Move: right"];

    // // Index to track the current move command
    // let moveIndex = 0;

    // // Move the snake in all four directions every 50ms
    // setInterval(() => {
    //   conn.write(moves[moveIndex]);
    //   moveIndex = (moveIndex + 1) % moves.length;
    // }, 50);
  });

  return conn;
};


module.exports = {connect};