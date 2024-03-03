const obj = {
  name: {
    firstName: "Rohan",
    lastName: "Kumar",
  },
  address: {
    number: 8826841490,
    country: "india",
    pincode: 201005,
  },
  email: "rohan@gmail.com",
  hobbies: ["singing", "dancing", "music"],
};

const objTwo = {
  a: null,
  b: true,
};

function deepCopy(obj) {
  const result = {};
  if (
    typeof obj !== "object" ||
    obj === null ||
    Array.isArray(obj) ||
    typeof obj === "function"
  ) {
    return obj;
  }
  const keys = Object.keys(obj);
  for (let key in obj) {
    result[keys[key]] = deepCopy(obj[keys[key]]);
  }
  return result;
}

const deepCopyObject = deepCopy(obj);
const deepCopyObjectTwo = deepCopy(objTwo);

obj.address.country = "USA";

console.log("deepCopyObject :", deepCopyObject);
console.log("obj :", obj);

objTwo.a = "gfg";
console.log("deepCopyObjectTwo :", deepCopyObjectTwo);
console.log("objTwo :", objTwo);
