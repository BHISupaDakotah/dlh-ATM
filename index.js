// Project 2: Virtual ATM Machine (OOP Project)
// - Build a console app that mimics an atm machine
// - Persitent balance (crudable [add, remove, null, get])
// - Main Menu that routes to other menus
//   *********
//   Welcome
//   1) view balance
//    ..... etc
//   *********
// - Redirect back to the main menu
// - Error handling for withdrawals
// - Deposit
// - Exit the program via selection
// - Receipt

class ATM {
  constructor(userName, accountBalance = 1) {
    this.userName = userName;
    this.accountBalance = accountBalance;
  }

  deposit(addAmount) {
    this.accountBalance += addAmount;
    return window.alert(
      `you added $ ${addAmount} and your total is $ ${this.accountBalance}`
    );
  }

  withdraw(subAmount) {
    if (subAmount > this.accountBalance) {
      return window.alert(`sorry, insufficient funds`);
    } else {
      this.accountBalance -= subAmount;
      return window.alert(
        `you removed $ ${subAmount} and your total is $ ${this.accountBalance}`
      );
    }
  }

  currentAmount() {
    return window.alert(
      `${this.userName} your current balance is $ ${this.accountBalance}`
    );
  }
}

let useAtm = () => {
  let userName = window.prompt("What is your name? ");

  let currentUser = new ATM(userName);

  let running = true;
  while (running) {
    let userSelection = window.prompt(`
         welcome to the atm!
    ******************************
    Please select from below...
    
    [D] deposit
    [W] withdrawal
    [B] view balance
    [Q] quit
    `);

    if (userSelection === "D" || userSelection === "d") {
      if ((addAmount = +window.prompt("Enter a deposit amount: "))) {
        currentUser.deposit(addAmount);
      } else {
        window.alert`Please enter a number`;
      }
    } else if (userSelection === "W" || userSelection === "w") {
      if ((subAmount = +window.prompt("Enter a withdrawal amount: "))) {
        currentUser.withdraw(subAmount);
      } else {
        window.alert`Please enter a number`;
      }
    } else if (userSelection === "B" || userSelection === "b") {
      currentUser.currentAmount();
    } else if (userSelection === "Q" || userSelection === "q") {
      {
        break;
      }
    } else {
      return window.alert`please select valid input`;
    }
  }
};

useAtm();
