class BankAccount {

    #amount;
    constructor(amount){
    this.#amount = amount;
    }

    deposit(addImport) {
        this.#amount += addImport
    };

    withdraw(subImport) {
      this.#amount -= subImport
    };

    view() {
    return console.log(`Il saldo residuo è: ${this.#amount}`);
    }
}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view()


