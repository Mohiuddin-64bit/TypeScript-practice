{
  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      protected _balance: number
    ) {}
    addBalance(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    text(){
      this._balance
    }
  }

  const goribAccount = new BankAccount(111, "Mr PoorMan", 20);
  const myMoney = goribAccount.addBalance(100);
  const myBlanace = goribAccount.getBalance();
  console.log(myBlanace);

  // End
}
