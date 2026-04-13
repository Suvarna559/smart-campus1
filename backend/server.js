const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/campus")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Socket
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendNotice", (msg) => {
    io.emit("receiveNotice", msg);
  });
});

server.listen(5000, () => console.log("Server running on 5000"));