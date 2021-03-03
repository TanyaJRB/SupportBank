const Bank = require('./Bank.js');
const csv = require('csv-parser');
const fs = require('fs');
//const { processUserCommandPrompt } = require('./userInput.js');
//const userInput = require('./userInput'); 

var bankoo = new Bank();

bankoo.readCSV('./Transactions2014.csv');

setTimeout(main, 2000);

function main() {
    console.log(bankoo.allAccounts.length);
}

//processUserCommandPrompt(bankoo);

//bankoo.listAccount("Sam N");

/*
bankoo.aggregateDebts();

*/