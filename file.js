const fs = require("fs");

// (Sync call) first agrument is file name and second data
// fs.writeFileSync("text.txt", "hello file system");
// USE cmd modemon file.js

// ASYNC
fs.writeFile("text.txt", "hello file system async", (err) => {});
