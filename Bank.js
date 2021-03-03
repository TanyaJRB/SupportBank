const Transaction = require('./Transaction.js');
const Account = require('./Account.js');
const csv = require('csv-parser');
const fs = require('fs');

class Bank {

    //field and properties go here
    allAccounts; //array of account objects 

    //constructor - constructs a bank object with an array of accounts
    constructor(){
        this.allAccounts = [];
    }

    //methods 

    readCSV(filename){  
        fs.createReadStream(filename)
        .pipe(csv())
        .on('data', (row) => {
                //console.log(row);
                var acc1 = new Account(row.From);
                var acc2 = new Account(row.To);
                var trans1 = new Transaction(row.Date, row.From, row.To, row.Narrative, row.Amount);

                acc1.createDebt(trans1.amount);
                acc2.createCredit(trans1.amount);
                acc1.addTransaction(trans1);
                acc2.addTransaction(trans1);
                
                this.addAccount(acc1);
                this.addAccount(acc2);

                })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });
    }

    addAccount(account) {
        this.allAccounts.push(account)
    }

    aggregateDebts(){ //for each account, calculates the aggregate balance and returns a string displaying it (equivelent to listAll request in assignment)

        let phrase; 
        listAll;

        this.allAccounts.forEach(account => {
            let balance = account.calculateBalance(); 
            if (balance >= 0)
            {
                phrase = "is owed";
            }
            else
            {
                phrase = "owes";
            }
            let balanceString = `After all transactions are aggregated, ${account.name} ${phrase} ${balance}.`;
            listAll.push(balanceString)
        })

        console.log(listAll);
    }

    readJSON(filename){

    }

    readXML(filename){

    }

}

module.exports = Bank;