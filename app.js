const http = require("http");
const express = require("express");
const { sendProducts } = require("./sendProducts");
const { createUser, createPost, viewPostList } = require("./user");

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "/pong" });
});

app.post("/signup", createUser);
app.post("/login", (req, res) => {
  res.json("login success");
});
app.get("/products", sendProducts);
app.post("/posts", createPost);
app.get("/viewposts", viewPostList);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is listening on PORT 8000");
});
