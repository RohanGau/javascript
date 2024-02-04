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
