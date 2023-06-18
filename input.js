// Handles user input from stdin and sends corresponding commands to the game server
const handleUserInput = function(key, connection) {
  if (key === 'w') {
    console.log('Move up');
    connection.write("Move: up");
    // Perform the corresponding action for moving up
  } else if (key === 'a') {
    console.log('Move left');
    connection.write("Move: left");
    // Perform the corresponding action for moving left
  } else if (key === 's') {
    console.log('Move down');
    connection.write("Move: down");
    // Perform the corresponding action for moving down
  } else if (key === 'd') {
    console.log('Move right');
    connection.write("Move: right");
    // Perform the corresponding action for moving right
  } else if (key === '\u0003') {
    console.log('User has left');
    // Check for Ctrl + C input (ASCII code 3) and terminate the game
    process.exit();
  } else if (key === 'm') {
    const message = "Say: Hello, everyone!";
    console.log("Sending a message:", message);
    // Perform the action to send the message to the server
    // You would need to implement the code to send the message string to the server
  } else if (key === 'n') {
    const message = "Say: How is everyone doing?";
    console.log("Sending a message:", message);
    // Perform the action to send another message to the server
    // You would need to implement the code to send the message string to the server
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