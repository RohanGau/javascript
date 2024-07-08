function add(x) {
    return x + 1;
}

function multiply(x) {
    return x * x;
}

function square(x) {
    return x * 2;
}

// this is simple composition only with two functions
const composeFunction = (x) => add(multiply(x));

console.log(composeFunction(6));

const compose = (...functions) => (input) => {
    return functions.reduceRight((acc, fn) => fn(acc), input);
}
  
const multiCompositionFunction = compose(add, multiply, square);

console.log(multiCompositionFunction(6));


const users = [
  { name: 'Rohan', age: 25 },
  { name: 'Rakesh', age: 30 },
  { name: 'Jain', age: 35 },
];

const getNames = (users) => users.map(user => user.name);
const toUpperCase = (names) => {
    return names.map(name => name.toUpperCase())
};
const joinWithComma = (names) => names.join(', ');

const processUsers = compose(joinWithComma, toUpperCase, getNames);

console.log(processUsers(users));
