function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;

    case "-":
      console.log(num1 - num2);
      break;

    case "*":
      console.log(num1 * num2);
      break;

    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log(undefined);
  }
}

calculate(12, "+", 2);
calculate(12, "-", 2);
calculate(12, "*", 2);
calculate(12, "/", 2);
