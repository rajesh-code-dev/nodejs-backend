const express = require("express");
const app = express();
const fs = require("fs");
const { x, calculateSum } = require("./app");

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  fs.appendFileSync(
    "localStorage.txt",
    `${req.method}, ${req.url}, ${req.headers["content-location"]}\n`
  );
  next();
});

console.log(x);

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
