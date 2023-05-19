var account = {
  name: "Alex",
  balance: 0,
  credit(num) {
    this.balance += num;
  },
  describe() {
    return `${this.name} has $ ${this.balance} in his bank account`;
  },
};

console.log(account.describe());
