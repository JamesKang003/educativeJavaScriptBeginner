function reverse(word) {
  // Write - Your - Code
  let result = "";
  let size = word.length;
  for (let i = 0; i < size; i++) {
    result += word[size - i - 1];
  }

  return result;
}
