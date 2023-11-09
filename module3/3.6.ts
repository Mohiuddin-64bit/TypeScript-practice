{
  // Getter and setter
  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      protected _balance: number
    ) {}

    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    get balance() {
      return this._balance;
    }
  }

  const goribAccount = new BankAccount(111, "Mr PoorMan", 20);
  goribAccount.deposit = 40;
  const myBlanace = goribAccount.balance;

  console.log(myBlanace);

  // End
}
