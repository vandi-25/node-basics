// Task 4: generate a random password
const generator = require("generate-password");

function generatePassword() {
  const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true, // at least one character of each type
  });
  console.log("Your new password:", password);
}

generatePassword();
