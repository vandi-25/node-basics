// Task 3 (part 1): create "welcome.txt" containing "Hello Node"
const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.log("Could not create the file:", err.message);
    return;
  }
  console.log("welcome.txt was created");
});
