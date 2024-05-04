import { Server } from "socket.io";
import express from "express";
import http from "http";
import cors from "cors";
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("new user connected", socket.id);
})

export {app, server, io}