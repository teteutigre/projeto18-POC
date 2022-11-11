import express from "express";
import cors from "cors";
import router from "./routers/router";

const server = express();
server.use(express.json());
server.use(cors());

server.get("/server", (req, res) => {
  res.send("online");
});

server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
