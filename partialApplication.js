// fixing some argument of the orginal function
// technique allow the bind some argumeent without calling completely

function sum(x , y , z) {
    return x + y + z;
}

var partialFun = sum.bind(this, 2, 3); // return a new function
console.log(partialFun(4));


function customPartialFunction(fn, ...firstArgs) {
    return function(...secondArgs) {
        return fn(...firstArgs, ...secondArgs);
    }
}

const customPartialFunc = customPartialFunction(sum, 2, 3);
console.log(customPartialFunc(3));

const greetMessage = (greet, name) => {
    return `${greet} ${name}`;
};

const greeting = customPartialFunction(greetMessage, "Hello");
console.log(greeting("Rohan"));
console.log(greeting("Rakesh"));
