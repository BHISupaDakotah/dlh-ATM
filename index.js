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
  constructor(userName, accountBalance = 100) {
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

// let dakotah = new ATM("dakotah");

// dakotah.currentAmount();
// dakotah.deposit(5);
// dakotah.withdraw(50);
// dakotah.deposit(1);
// dakotah.withdraw(75);

let useAtm = () => {
  let userName = window.prompt("What is your name? ");

  let currentUser = new ATM(userName);

  let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let running = true;
  while (running) {
    let userSelection = window.prompt(`
    welcome!
    *****************
    Please select from below...
    
    [D] deposit
    [W] withdrawal
    [B] view balance
    [Q] quit
    `);

    if (userSelection === "D" || userSelection === "d") {
      addAmount = Number(window.prompt("Enter a deposit amount: "));
      // if (Number.isInteger(addAmount) === True) {
      currentUser.deposit(addAmount);
      // } else {
      //   window.alert`Please enter a number`;
      // }
    } else if (userSelection === "W" || userSelection === "w") {
      subAmount = Number(window.prompt("Enter a withdrawal amount: "));
      currentUser.withdraw(subAmount);
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
