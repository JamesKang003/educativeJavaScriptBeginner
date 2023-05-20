function findSum(array) {
  //your code goes here//
  let sum = 0;
  for (num of array) {
    if (num.length == undefined) {
      sum += num;
    } else {
      sum += findSum(num);
    }
  }
  return sum;
}
