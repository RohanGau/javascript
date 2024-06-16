function higherOrderFunction(arr, operation){
  let result = [];
  for(let element of arr) {
    result.push(operation(element));
  }
  return result;
}

function double(x) {
  return 2 * x;
}

const numbers = [2, 3, 4, 5, 6];

console.log(higherOrderFunction(numbers, double));
