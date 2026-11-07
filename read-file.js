// Task 3 (part 2): read hello.txt and print what's inside
const fs = require("fs");

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Could not read the file:", err.message);
    return;
  }
  console.log(data);
});
