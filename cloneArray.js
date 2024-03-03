// new RegExp(regExp, flags);

// using the Array.slice(): create a shallow copy of an array.
const orginalArray = [1, 2, 3, 4, 5, 6];
const orginalObjectArray = [
  { name: "Rohan", location: "BLR" },
  { name: "Rakesh", location: "DLI" },
];
const cloneArray = orginalArray.slice();
const cloneObjectArray = orginalObjectArray.slice();
// orginalObjectArray[0].name = "Gaurav";
// console.log("cloneObjectArray :", cloneObjectArray, orginalObjectArray);

// using ... spread operator is concise and easy way to clone an array in JS.
const spreadArray = [...orginalObjectArray];
// orginalObjectArray[0].name = "Gaurav";

// console.log("cloneObjectArray :", spreadArray, orginalObjectArray);

// using the Array.from() method i has a n optional mapping function to transform the values in the new array
const fromArray = Array.from(orginalObjectArray);
// orginalObjectArray[0].name = "Gaurav";
// console.log("fromArray :", fromArray, orginalObjectArray);

// using concat method creates a new array by concatenating two or more array together
const concatArray = [].concat(orginalObjectArray);
// orginalObjectArray[0].name = "Gaurav";
// console.log("fromArray :", concatArray, orginalObjectArray);

// using for loop
const array = [];
for (let i = 0; i < orginalObjectArray.length; i++) {
  array.push(orginalObjectArray[i]);
}
// orginalObjectArray[0].name = "Gaurav";
// console.log("array :", array, orginalObjectArray);

// using Array.map

const mapArray = orginalObjectArray.map((item) => item);
// console.log("mapArray :", mapArray);

// using from() method with a map() function create a new array by mapping each elements from the orginal one to new value using provided function
const fromMapArray = Array.from(orginalObjectArray, (x) => x);
// console.log("fromArray :", fromMapArray);

// using array of method
const arrayOf = Array.of(...orginalObjectArray);
// console.log("arrayOf :", arrayOf);

// using jSON.parse() and JSON.stringify() methods
const jsonArray = JSON.parse(JSON.stringify(orginalObjectArray));
// orginalObjectArray[0].name = "Gaurav";
// console.log("jsonArray :", jsonArray, orginalObjectArray);

// using Object.asing method creates a new array by copying the properties of organial array
const assignArray = Object.assign([], orginalObjectArray);
// orginalObjectArray[0].name = "Gaurav";
// console.log("assignArray :", assignArray, orginalObjectArray);
