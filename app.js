var words = {
  list: [],
  addWord(input) {
    if (!input.endsWith("ing")) {
      this.list.push(input);
    }
  },
};
words.addWord("Hello");
words.addWord("World");
words.addWord("Working");
words.addWord("London");

console.log(words.list);
