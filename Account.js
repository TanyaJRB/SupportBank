const Transaction = require('./Transaction.js');
const Bank = require('./Bank.js');

class Account {

    //properties and fields 
    name; //string 
    moneyOwed; //number
    moneyOwing; //number 
    balance; //number 
    transactions; //transactions []

    //constructor
    constructor (accountHolderName,){
        this.name = accountHolderName; 
        this.balance = 0; 
        this.moneyOwed = 0;
        this.moneyOwing = 0; 
        this.transactions = [];
    }

    createDebt(money){
        this.moneyOwing += money; 
    }

    createCredit(money){
        this.moneyOwed += money;
    }

    calculateBalance(){
        let balance = this.moneyOwed - this.moneyOwing; 
        return balance; 
    }

    addTransaction(transaction){
        this.transactions.push(transaction);
    }

}

module.exports = Account; 