//const readline = require('readline-sync');

processUserCommandPrompt(bankObject); {
    console.log('What would you like to know?');
    let command = readline.prompt();
    if (command === 'List All') {
        bankObject.aggregateDebts();
    } else if (command.substr(0, 4) === 'List Account') {
        console.log('Please enter the name of the person whose account you would like to access:');
        let command2 = readline.prompt();
        bankObject.listAccount(command2);
    }
}

exports.processUserCommandPrompt = processUserCommandPrompt; 














/* getStringWithPrompt(prompt) {
    console.log(`\n${prompt}`);
    return readline.prompt();
} 

exports.getStringWithPrompt = getStringWithPrompt;

 processUserCommand(allAccounts, transactions) {
        console.log('What would you like to know?');
        let command = readline.prompt();
        if (command === 'List All') {
            console.log(allAccounts);
        } else if (command.substr(0, 4) === 'List') {
            let person = command.substr(5);
            let personTrans = getTransfersForPerson(person, transactions);
            console.log(personTrans);
        }
    } 
    
    getFile() { 
    return userInput.getStringWithPrompt('Which file would you like to process?')
}
    */