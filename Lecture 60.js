// Synchronous or Blocking
// -- Executed line by line

// Asynchronous or Non Blocking
// -- line by line execution not guaranteed
// -- callbacks will fire

const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data)=>{
    console.log(data)
    // console.log(err, data)
});
console.log("This is a message");