// left --> right = last output pipe
// right --> left = last output compose

function getName(person) {
  return person.name;
}

function upperCase(string) {
  return string.toUpperCase();
}

function get6Characters(string) {
  return string.substring(0, 6);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const name = getName({ name: "Buckethead" });
// console.log(reverseString(get6Characters(upperCase(name))));

// const pipe =
//   (...fns) =>
//   (x) =>
//     fns.reduce((v, f) => f(v), x);

const pipe =
  (...functions) =>
  (value) => {
    return functions.reduce((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };
const compose =
  (...functions) =>
  (value) => {
    return functions.reduceRight((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };

const polyFillCompose = function (...fns) {
  let result;
  const length = fns.length;
  return function (...args) {
    for (let i = length - 1; i >= 0; i--) {
      const fn = fns[i];
      result = i === length - 1 ? fn(...args) : fn(result);
    }
    return result;
  };
};

const polyFillPipe = function (...fns) {
  let result;
  const length = fns.length;
  return function (...args) {
    for (let i = 0; i < length; i++) {
      const fn = fns[i];
      result = i ? fn(result) : fn(...args);
    }
    return result;
  };
};

const pipeResult = polyFillPipe(
  getName,
  upperCase,
  get6Characters,
  reverseString
)({ name: "RohanKumar" });

const composeResult = polyFillCompose(
  reverseString,
  get6Characters,
  upperCase,
  getName
)({ name: "RohanKumar" });

console.log("pipeResult :", pipeResult);
console.log("composeResult :", composeResult);
