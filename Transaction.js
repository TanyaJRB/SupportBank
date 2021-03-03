//require statements

class Transaction{
    
    //properties and fields
    date; //datetime
    from; //string
    to; //string
    narrative; //string
    amount; //number


    //constructor
    constructor(date, from, to, narrative, amount){
        this.date = date; 
        this.from = from;
        this.to = to;
        this.narrative = narrative;
        this.amount = amount; 
    }

    //methods 

}

module.exports = Transaction;