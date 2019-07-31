const express = require("express");
const configport = require("./config/port");

const server = express();
const port = configport;

const userRouter = require("./routers/userRouter");

server.use(express.json());

server.use(userRouter);

server.listen(port, () => console.log("berhasil running di " + port));
