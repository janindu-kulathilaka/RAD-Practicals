const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//question 01
app.get("/greet/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

//question 02
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.send(`<h2>Registration Successful</h2>\
            <p>Name: ${name}</p>\
            <p>Email: ${email}</p>\
            `);
});

//question 03
const books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
  { id: 3, title: "Book 3" },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

//question 04

const validUsers = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required." });
  }

  const validUser = validUsers.find(
    (user) => user.username === username && user.password === password
  );

  if (!validUser) {
    return res.status(401).json({ error: "Invalid username or password." });
  }

  res.send(`Welcome, ${username}! You are now logged in.`);
});

//question 06
app.get("/calculate", (req, res) => {
  res.sendFile(__dirname + "/public/operation.html");
});

app.post("/calculate", (req, res) => {
  const { num1, num2, operation } = req.body;

  if (!num1 || !num2 || !operation) {
    return res
      .status(400)
      .json({ error: "num1, num2, and operation are required." });
  }

  const num1Parsed = parseFloat(num1);
  const num2Parsed = parseFloat(num2);

  if (isNaN(num1Parsed) || isNaN(num2Parsed)) {
    return res
      .status(400)
      .json({ error: "num1 and num2 must be valid numbers." });
  }

  let result;

  switch (operation) {
    case "add":
      result = num1Parsed + num2Parsed;
      break;
    case "subtract":
      result = num1Parsed - num2Parsed;
      break;
    case "multiply":
      result = num1Parsed * num2Parsed;
      break;
    case "divide":
      if (num2Parsed === 0) {
        return res.status(400).json({ error: "Cannot divide by zero." });
      }
      result = num1Parsed / num2Parsed;
      break;
    default:
      return res.status(400).json({ error: "Invalid operation." });
  }

  res.json({ result });
});

//question 05

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/error.html");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
