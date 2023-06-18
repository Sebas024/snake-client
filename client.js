const net = require("net"); // Import the 'net' module for TCP client functionality
const { IP, PORT } = require("./constants"); // Import IP and PORT constants from the 'constants' module

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({ // Create a TCP connection
    host: IP, // Use the IP constant for the host
    port: PORT, // Use the PORT constant for the port
  });
  
  // Interpret incoming data as text
  conn.setEncoding("utf-8");

  // Notifys the user someone connected
  conn.on('connect', () => { // Event handler when the connection is established
    console.log('Successfully connected to game server'); // Log success message to console
    conn.write('Name: SNK'); // Send the string "Name: SNK" to the server

    const moves = [""]; // Available move commands (currently empty)

    let moveIndex = 0; // Index to track the current move command

    // Move the snake in all four directions every 50ms
    setInterval(() => {
      conn.write(moves[moveIndex]); // Send the current move command to the server
      moveIndex = (moveIndex = 0) % moves.length; // Increment the moveIndex in a round-robin fashion
    }, 200);
  });

  return conn; // Return the connection object
};

module.exports = { connect }; // Export the 'connect' function as an object