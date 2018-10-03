const person = {
    name: 'Helder'
};

person.age = 28;

debugger;

person.name = 'Tiago';

debugger;

console.log(person);

// use inspect flag when we want to debug the app on the terminal
// List of terminal debug commands
// [c] -> continue (will go to the next breakpoint) breakpoints are declared in code with the keyword debugger
// [n] -> next (Go to the next line)
// [list(n)] n -> line number (go to a specific line number)
// [repl] -> Used to evaluate/manipulate the variables like we use evaluate in the browser terminal of chrome