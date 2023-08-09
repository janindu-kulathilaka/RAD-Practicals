const numbers = [1, 2, 3, 4, 5];

function square(number) {
  return number * number;
}

numbers.forEach((num) => {
  const squaredNumber = square(num);
  console.log(`Square of ${num} is ${squaredNumber}`);
});
