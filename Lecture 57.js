console.log("This is Tutorial 57");

// Due to function time consuming
function greet(name, greetText = "Greetings from JavaScript") {
  // default value of greetext
  let name1 = "Name1"; // local variable
  console.log(greetText + " " + name);
  console.log(name + " is a good girl");
}

function sum(a, b, c) {
  let d = a + b + c;
  return d;
  // This line will never print (execute) (unreachable code)
  // console.log("Function is returned");
}

let name1 = "insha"; // Global Variable
let name2 = "mishal";
let name3 = "nazia";
let name4 = "rehana";
let name5 = "romana";
let greetText = "Good Morning";

greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4, greetText);
// let returnval = greet(name5);
// console.log(returnval);

let returnval = sum(1, 2, 3);
console.log(returnval);

// console.log(name1 + " is a good girl");
// console.log(name2 + " is a good girl");
// console.log(name3 + " is a good girl");
// console.log(name4 + " is a good girl");
// console.log(name5 + " is a good girl");
