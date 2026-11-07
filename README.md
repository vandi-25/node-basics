# Node.js Basics

Five small Node.js exercises, one file per task.

## Setup

Install Node.js from https://nodejs.org, then in this folder run:

```
npm install
```

## The tasks

| # | Task | File | Run with |
|---|------|------|----------|
| 1 | Print "HELLO WORLD" | `hello-world.js` | `node hello-world.js` |
| 2 | Server on port 3000 | `server.js` | `node server.js`, then open http://localhost:3000 |
| 3 | Create `welcome.txt` | `create-file.js` | `node create-file.js` |
| 3 | Read `hello.txt` | `read-file.js` | `node read-file.js` |
| 4 | Random password | `password-generator.js` | `node password-generator.js` |
| 5 | Send an email | `email-sender.js` | `node email-sender.js` |

Press `Ctrl+C` to stop the server in task 2.

## Task 5: sending an email with Gmail

The email details in `email-sender.js` are placeholders, so no personal information is uploaded. To send yourself an email:

1. Turn on **2-Step Verification** for your Google account.
2. Create an **App Password** at https://myaccount.google.com/apppasswords. Gmail doesn't accept your normal password from apps.
3. In `email-sender.js`, replace `your-email@gmail.com` (3 places) and `your-app-password` with your own details.
4. Run `node email-sender.js`. It prints `Email sent: ...` when it works.
5. **Put the placeholders back before uploading to GitHub.**
