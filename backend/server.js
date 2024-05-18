import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import { Redis } from "ioredis";

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
dotenv.config();
const pub = new Redis({
  host: process.env.AIVEN_HOST,
  port: process.env.AIVEN_PORT,
  username: process.env.AIVEN_USERNAME,
  password: process.env.AIVEN_PASSWORD,
});
console.log(pub);

const sub = new Redis({
  host: process.env.AIVEN_HOST,
  port: process.env.AIVEN_PORT,
  username: process.env.AIVEN_USERNAME,
  password: process.env.AIVEN_PASSWORD,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

sub.subscribe("aman");
io.on("connection", (socket) => {
  socket.on("join_room", async (data) => {
    // socket.join(data);
    // console.log("User Joined Room: " + data);
  });

  socket.on("message", async (data) => {
    console.log(data);
    await pub.publish("aman", JSON.stringify(data));
  });
  sub.on("message", (channel, message) => {
    if (channel === "aman") {
      // socket.emit("message_sent", { data: message });
      console.log(message);
    }
  });
});

export { io, pub, sub, app, httpServer };
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

export default app;
