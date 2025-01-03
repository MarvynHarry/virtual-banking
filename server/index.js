const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Servir la carpeta "public"
app.use(express.static(path.join(__dirname, "../public")));

io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  // Escuchar mensajes enviados por Widget A
  socket.on("send_message", (message) => {
    console.log("Mensaje recibido de Widget A:", message);
    io.emit("receive_message", message); // Enviar el mensaje a todos los clientes conectados
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
