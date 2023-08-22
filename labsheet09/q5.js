const express = require("express");
const app = express();

function errorHandlerMiddleware(err, req, res, next) {
  console.error(err);
  res.status(400).json({ error: "Invalid input" });
}

app.use("/convert", (req, res, next) => {
  const celsius = parseFloat(req.query.celsius);

  if (isNaN(celsius)) {
    const error = new Error("Invalid temperature input");
    next(error);
  } else {
    const fahrenheit = (celsius * 9) / 5 + 32;
    let feedback = "";

    if (fahrenheit < 32) {
      feedback = "Freezing";
    } else if (fahrenheit < 50) {
      feedback = "Cool";
    } else if (fahrenheit < 70) {
      feedback = "Warm";
    } else {
      feedback = "Hot";
    }

    res.json({
      celsius: celsius,
      fahrenheit: fahrenheit,
      feedback: feedback,
    });
  }
});

app.use(errorHandlerMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
