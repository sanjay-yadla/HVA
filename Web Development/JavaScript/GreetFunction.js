function greet(name){
    return 'Hello ' +  name;
}

console.log(greet('sanjay'))

function greetDefault(name='guest'){
    return `Hello, ${name}!`;
}
console.log(greetDefault())

const greetFunction = function(name) {
    return `Hello, ${name}!`;
}
console.log(greetFunction('HVA'))

const greetArrow = (name) => `Hello, ${name}!`;

console.log(greetArrow('Jeevan'));