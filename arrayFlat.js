const arr1 = [1, 2, 3, 4, [5, 6]];
console.log("arr1.flat() :", arr1.flat());

const arr2 = [1, 3, [2, [6, [8, 9]]]];
console.log("arr1.flat() :", arr2.flat());

console.log("arr2.flat(2) :", arr2.flat(2));

console.log("arr2.flat(Infinity) :", arr2.flat(Infinity));

const arr3 = [1, 2, [3, 4]];
console.log("arr3.flat() :", arr3.flat());
// [1, 2, 3, 4]

const arr4 = [1, 2, [3, 4, [5, 6]]];
console.log("arr4.flat() :", arr4.flat());
// [1, 2, 3, 4, [5, 6]]

const arr5 = [1, 2, [3, 4, [5, 6]]];
console.log("arr5.flat(2) :", arr5.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr6 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log("arr6.flat(Infinity) :", arr6.flat(Infinity));

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]
// using the flat on sparse array

const object = {
  length: 3,
  0: [1, 2],
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
  3: 3,
};
console.log("****");
console.log(object);
console.log(Array.prototype.flat.call(object));

const flatMapArray = [1, 2, [3, 4, [2, 4]], 5, 6, [7, 9]];
console.log(flatMapArray.flatMap((element) => element));
