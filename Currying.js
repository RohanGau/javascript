// function we can do by two ways
// first is bind method
// second is closure

// bind method
let multiple = function (x, y) {
  console.log("multiply by bind :", x * y);
};

// closure
let closureMultiply = function (x) {
  return function (y) {
    console.log("multiply by closure :", x * y);
  };
};

let multipleByTwo = multiple.bind(this, 2);
multipleByTwo(3);
multipleByTwo(3, 5); // this will ignore 5 param

// let multipleByThree = multiple.bind(this, 3, 5); // this is also work
let multipleByThree = multiple.bind(this, 3);
multipleByTwo(5);

// function curring using closure
let multiplyByFour = closureMultiply(4);
multiplyByFour(8);

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const sum1 = sum(4)(5)(8);
console.log(sum1);

function sendRequest(greet) {
  return function (name) {
    return function (message) {
      return greet + " " + name + " " + message;
    };
  };
}

const result = sendRequest("Hello")("Rohan")(
  "you add me to your linkdin network"
);

// modern technique in currying method
const sendRequestModern = (greet) => (name) => (message) =>
  greet + " " + name + " " + message;
const result2 = sendRequest("Hello")("Gaurav")(
  "you add me to your linkdin network"
);

console.log("result2 :", result2);

function curry(func) {
  return function carried(...args) {
    if (args.length >= func.length) return func.apply(this, args);
    else {
      return function (...args2) {
        console.log("args2 :", args2, args.concat(args2));
        return carried.apply(this, args.concat(args2));
      };
    }
  };
}

function commonSum(a, b, c) {
  return a + b + c;
}

let carriedSum = curry(commonSum);
// console.log(carriedSum(1, 2, 3));
// console.log(carriedSum(1)(2, 3));
// console.log(carriedSum(1)(2)(4));

let recursionSum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

const ans = recursionSum(10)(20)(39)(87);

console.log("recursion function :", ans);

function add(...args) {
  let sum = args.reduce((a, b) => a + b, 2); // Initialize sum to 0

  function innerAdd(...innerArgs) {
    if (innerArgs.length === 0) {
      // If no more arguments, return sum
      return sum;
    }
    sum += innerArgs.reduce((a, b) => a + b, 0); // Add the new set of arguments to sum
    return innerAdd; // Return innerAdd function for further chaining
  }

  return innerAdd(...args); // Call innerAdd with initial arguments
}

let recursionAdd = add(2, 3);
console.log("recursionAdd:", recursionAdd());



// partial application pre fill some arguments and reuse the partially applied function

const multiply = (a, b) => a * b;
const curriedMutliply = curry(multiply);

const double = curriedMutliply(2);
console.log("double :", double(3));

// dynamic arguments length
function dynamicCurry(func) {
    const curried = (...args) => {
        const next = (...args2) => {
            if(args2.length === 0) {
                return func(...args);
            }
            return curried(...args, ...args2);
        }
        return next;
    }
    return curried;
}



const add = (...nums) => nums.reduce((sum, n) => sum + n, 0);

const curriedAdd = dynamicCurry(add);
console.log("dyamic", curriedAdd(1, 2)(3, 5)(5)());
console.log("dyamic", curriedAdd()());


// reusability in functional pipelines
const compose = (...fns) => (args) => fns.reduceRight((result, fn) => fn(result), args);

const add1 = (x) => x + 1
const double = (x) => x * 2;

const addThenDouble = compose(double, add1);
console.log(addThenDouble(5));



