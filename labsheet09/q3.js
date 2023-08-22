const express = require("express");
const app = express();

function apiKeyMiddleware(req, res, next) {
  const apiKey = "aaaaaabbbbbbbbbbbbbccccccccc";

  const providedApiKey = req.headers.authorization;

  if (providedApiKey === apiKey) {
    next();
  } else {
    res.status(401).json({ error: "Invalid API key" });
  }
}

app.use(apiKeyMiddleware);

app.get("/protected", (req, res) => {
  res.json({ message: "Access granted to protected route" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
