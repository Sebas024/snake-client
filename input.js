// Handles user input from stdin and sends corresponding commands to the game server
const handleUserInput = function(key, connection) {
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === '\u0003') {
    console.log('User has left');
    // Check for Ctrl + C input (ASCII code 3) and terminate the game
    process.exit();
  } else if (key === '1') {
    connection.write('Say: Hello, everyone!');
  } else if (key === '2') {
    connection.write('Say: How is everyone doing?');
  }
};

// Sets up the input stream to handle user input and calls handleUserInput with the key and connection
const setupInput = function(connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key, connection));
  
  return stdin;
};

module.exports = { setupInput };