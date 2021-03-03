const Transaction = require('./Transaction.js');
const Account = require('./Account.js');
const csv = require('csv-parser');
const fs = require('fs');
// //const userInput = require('./userInput');

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
            //for each row in the data being parsed 

                //Checks if account already exists and creates a new Account Class object if not 

                let exists1 = false; 
                let exists2 = false;

                let acc1;
                let acc2; 

                for (let i=0; i<this.allAccounts.length; i++){
                    if (this.allAccounts[i].name === row.From)
                    {
                        exists1 = true;
                        acc1 = this.allAccounts[i]; 
                        break; 
                    }
                }
                for (let i=0; i<this.allAccounts.length; i++){
                    if (this.allAccounts[i].name === row.To)
                    {
                        exists2 = true; 
                        acc2 = this.allAccounts[i];
                        break; 
                    }
                }
                if (exists1 === false){
                    acc1 = new Account(row.From); //creates a new Account object for Person 1 
                    this.addAccount(acc1);
                }
                if (exists2 === false){
                    acc2 = new Account(row.To); //creates a new Account object for Person 2 
                    this.addAccount(acc2);
                }

                //Creates a transaction from a row in the Transactions Class 
                var trans = new Transaction(row.Date, row.From, row.To, row.Narrative, row.Amount);

                acc1.createDebt(trans.amount); //Calls the createDebt Method in the Account Class for Account 1
                acc2.createCredit(trans.amount); //Calls the createCredit Method in the Account Class for Account 2
                acc1.addTransaction(trans); //Calls the addTransaction Method in the Account Class for Account 1
                acc2.addTransaction(trans); //Calls the addTransactions Method in the Account Class for Account 2
            
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
        let listAll = []; //string array

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

        for (let i=0; i<listAll.Length; i++)
        {
            console.log(listAll[i]);
        }
    }

    listAccount(nameInputted){ //defined this way for use with readsync

        let account = this.allAccounts.find(account => account.name === nameInputted.ToLower()); 

        if (account.transactions.length = 0){
            console.log(`${this.name} has no transactions to display.`);
        }
        else
        {
            account.transactions.forEach(transaction => {
                console.log(transaction);
            });
        }
    }

    readJSON(filename){

    }

    readXML(filename){

    }

}

module.exports = Bank;