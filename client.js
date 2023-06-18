const net = require("net");
const { IP, PORT } = require("./constants");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({ // Create a TCP connection
    host: IP,
    port: PORT,
  });
  
  // Interpret incoming data as text
  conn.setEncoding("utf-8");

  // Notifys the user someone connected
  conn.on('connect', () => { // Event handler when the connection is established
    console.log('Successfully connected to game server'); // Log success message to console
    conn.write('Name: SNK'); // Send the string "Name: SNK" to the server
  });

  return conn; // Return the connection object
};

module.exports = { connect }; // Export the 'connect' function as an object