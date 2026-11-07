// Task 5: send an email with nodemailer
// Replace the placeholders below with your own details before running.
// Don't upload your real email or password to GitHub!
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // your Gmail address
    pass: "your-app-password", // a Gmail "App Password", not your normal password
  },
});

const mailOptions = {
  from: "your-email@gmail.com",
  to: "your-email@gmail.com", // send it to yourself
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log("Email sent:", info.response);
  }
});
