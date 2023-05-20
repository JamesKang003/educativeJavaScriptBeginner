function vowels(word) {
  // Write - Your - Code
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let c of word) {
    if (vowels.includes(c)) {
      count++;
    }
  }
  return count;
}
