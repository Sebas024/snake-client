const net = require("net");
const { IP, PORT } = require("./constants");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  conn.setEncoding("utf8");

  // Notifys the user someone connected
  conn.on('connect', () => { // Event handler when the connection is established
    console.log('Successfully connected to game server'); // Log success message to console
    conn.write('Name: Huggies'); // Send the string "Name: SNK" to the server
  });

  conn.on("data", (data) => {
    console.log("Data received", data);
  });

  return conn;
};

module.exports = { connect };