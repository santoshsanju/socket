const exp = require("express");
const app = exp();
const env = require("dotenv").config();
const cors = require("cors");
const { Server } = require("socket.io");
const PORT = process.env.PORT;
app.use(cors());
const appServer = app.listen(PORT, () => console.log(`server is running on ${PORT}`));
const socketServer = new Server(appServer, {
  cors: {
    origin: "*",
  },
});
socketServer.on('connection', (socket) => {
  console.log("socket connected", socket.id);
  socket.on('message', (data) => {
    console.log("klsmlkdamlkas");
    socketServer.emit('message', data);
  });
  socket.on('disconnect', () => console.log("socket disconnected"));
});