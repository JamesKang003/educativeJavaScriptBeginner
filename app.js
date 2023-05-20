// Complete the class
class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
  credit(value) {
    this.balance += value;
  }
  describe() {
    return "Name: " + this.name + "\nBalance: " + this.balance;
  }
}
