const memoize = function (fn) {
  let cache = {};
  return function () {
    // args as key to store result
    const key = JSON.stringify(arguments);
    // if result is present for given key return it.
    if (cache[key]) {
      return cache[key];
    }
    // const evalutedValue = fn(...arguments);
    // console.log(arguments);
    const evalutedValue = fn.apply(this, arguments);
    cache[key] = evalutedValue;
    return evalutedValue;
  };
};

const deepMemoize = function (fn) {
  let cache = {};
  return function (...args) {
    let cacheKey = JSON.stringify(args);
    console.log("cacheKey :", cacheKey);
    if (cacheKey in cache) {
      return cache[cacheKey];
    } else {
      let result = args.reduce((acc, curr) => fn(acc, curr), 0);
      cache[cacheKey] = result;
      return result;
    }
  };
};

const add = (a, b) => a + b;

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

const memoizeFactorial = memoize(factorial);
const memoizedAdd = deepMemoize(add);
let a = memoizeFactorial(100); // slow;
console.log(a);

let b = memoizeFactorial(100); // fast
console.log(b);

let resultSum1 = memoizedAdd(12, 13);
console.log("resultSum1 :", resultSum1);
let resultSum2 = memoizedAdd(10, 20);
console.log("resultSum2 :", resultSum2);
