let num = 1;
while (num <= 100) {
  switch (num) {
    case num % 3 == 0 && num % 5 == 0:
      console.log("FizzBuzz");
    case num % 3 == 0:
      console.log("Fizz");
      break;
    case num % 5 == 0:
      console.log("Buzz");
      break;
    default:
      console.log(num);
  }
  num++;
}
