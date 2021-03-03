const Bank = require('./Bank.js');
const csv = require('csv-parser');
const fs = require('fs');

var bankoo = new Bank();

bankoo.readCSV('./Transactions2014.csv');