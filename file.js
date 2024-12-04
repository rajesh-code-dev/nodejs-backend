const fs = require("fs");

// (Sync call) first agrument is file name and second data
// fs.writeFileSync("text.txt", "hello file system");
// USE cmd modemon file.js

// ASYNC
// fs.writeFile("text.txt", "hello file system async", (err) => {});

// Question
// what is difference between sync and async?
// sync program works in a sequence and every task depend on the other to finish.
// in async every program works independently and can executed in parralel wothout
// blocking the program flow.

// READ FILE
// sync // ITS returns the result
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// // async // this is not returns the result, its a callback func
// fs.readFile("contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// APPEND FILE
// sync // when to use we can use to store user logs headers, methods, ip address
//  timestamp login attemps
fs.appendFileSync("logs.txt", `${Date.now()} user data 2\n`);

// copy file
fs.cpSync("logs.txt", "copy.txt");

// DELETE FILE
fs.unlinkSync("copy.txt");
