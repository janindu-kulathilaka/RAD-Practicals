const express = require("express");
const app = express();

function errorHandlerMiddleware(err, req, res, next) {
  console.error(err);
  res.status(400).json({ error: "Invalid input" });
}

app.use("/calculate-discount", (req, res, next) => {
  const originalPrice = parseFloat(req.query.price);
  const discountPercentage = parseFloat(req.query.discount);

  if (isNaN(originalPrice) || isNaN(discountPercentage)) {
    const error = new Error("Invalid input");
    next(error);
  } else {
    const discountedPrice =
      originalPrice - originalPrice * (discountPercentage / 100);
    const finalPrice = originalPrice - discountedPrice;

    res.json({
      originalPrice: originalPrice,
      discountPercentage: discountPercentage,
      discountedPrice: discountedPrice,
      finalPrice: finalPrice,
    });
  }
});

app.use(errorHandlerMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
