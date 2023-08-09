function addNumbers(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    throw new Error("Both inputs must be numbers");
  }

  return number1 + number2;
}

const result = addNumbers(5, 7);
console.log(result);
