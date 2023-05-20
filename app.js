var words = {
  list: [],
  addWord(input) {
    if (!input.startsWith("Coc")) {
      this.list.push(input);
    }
  },
};
words.addWord("Cookie");
words.addWord("Cool");
words.addWord("Coconut");
words.addWord("Cook");

console.log(words.list);
