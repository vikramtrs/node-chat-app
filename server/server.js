const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

const server = http.createServer(app);
const io = socketIO(server);
io.on('connection', socket => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server is up on ${port}`));
