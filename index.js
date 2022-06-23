console.log("hello");

// let userName = window.prompt("What is your name?");

// console.log(userName);

class ATM {
  constructor(userName, accountBalance = 100) {
    this.userName = userName;
    this.accountBalance = accountBalance;
  }

  deposit(addAmount) {
    this.accountBalance += addAmount;
    return console.log(this.accountBalance);
  }

  withdraw(subAmount) {
    if (subAmount > this.accountBalance) {
      return "insufficient funds";
    } else {
      this.accountBalance -= subAmount;
      return console.log(this.accountBalance);
    }
  }

  currentAmount() {
    return console.log(
      `${this.userName} your current balance is ${this.accountBalance}`
    );
  }
}

let dakotah = new ATM("dakotah");

dakotah.currentAmount();
dakotah.deposit(5);
dakotah.withdraw(50);
dakotah.deposit(1);
