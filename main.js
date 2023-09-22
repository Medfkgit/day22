const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const contacts = [];

function addContact() {
    rl.question('Name : ', (name) => {
        rl.question('Phone number : ', (number) => {
            contacts.push({ name, number });
            console.log("Contact added successfully");
            rl.prompt();
        });
    });
}

function viewContacts() {
    contacts.length == 0 ? console.log('Contact list is empty ')
        : contacts.forEach((contact) => console.log(`Name: ${contact.name}, Phone: ${contact.number}`));
    rl.prompt();
}

function searchContact() {
    rl.question('Name to search : ', (name) => {
        const searchedContact = contacts.find((contact) => contact.name === name);
        searchedContact ? console.log(`Contact - Name: ${searchedContact.name}, Phone: ${searchedContact.number}`)
            : console.log("Contact doesn't exist !");
        rl.prompt();
    });
}

function exitProgram() {
    rl.close();
}

function handleInput(input) {
    const option = input.toLowerCase();
    switch (option) {
        case 'add':
            addContact();
            break;
        case 'view':
            viewContacts();
            break;
        case 'search':
            searchContact();
            break;
        case 'exit':
            exitProgram();
            break;
        default:
            console.log('Invalid option !');
            rl.prompt();
    }
}

function initialize() {
    rl.setPrompt(`Choose an option :
1 - add 
2 - view
3 - search
4 - exit 
=> `);
    rl.prompt();

    rl.on('line', handleInput).on('close', () => process.exit(0));
}

// Start the program
initialize();
