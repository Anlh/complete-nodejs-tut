const person = {
    name: 'Helder'
};

person.age = 28;

debugger;

person.name = 'Tiago';

debugger;

console.log(person);

// Or you can use Chrome dev tools to inspect the code by writing the follow line on the terminal
// $ node/nodemon --inspect-brk [file_path] and execute it

// Open chrome://inspect in the url bar inside chrome browser to open the file