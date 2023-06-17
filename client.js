const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");


  // Notifys the user someone connected
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: SNK'); // Send the string "Name: ___" to the server
    

    // Available move commands
    const moves = [""];

    // Index to track the current move command
    let moveIndex = 0;

    // Move the snake in all four directions every 50ms
    setInterval(() => {
      conn.write(moves[moveIndex]);
      moveIndex = (moveIndex = 0) % moves.length;
    }, 200);
  });

  return conn;
};


module.exports = {connect};