const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("browser", "message");

console.log("The content of file is");
console.log(text);

console.log("Creating a new file.....");
fs.writeFileSync("insha.txt", text);

