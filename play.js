const { connect } = require("./client");
const { setupInput, handleUserIput } = require("./input");

console.log("Connecting ...");
const connection = connect();
setupInput(connection, handleUserIput);