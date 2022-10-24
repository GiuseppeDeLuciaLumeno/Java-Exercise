class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0){
      throw new Error("Importo non consentito")
    }
    this.#amount += amount;
  }

  withdraw(amount) {
    if(amount < 0 || amount > this.#amount) {
      throw new Error("Non è possibile prelevare un importo superiore al saldo")
      }
   this.#amount -= amount;
 }


  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();