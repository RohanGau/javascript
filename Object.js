const object = {
  for: "for",
  let: "let",
  const: "const",
  return: "return",
  if: "if",
};
// this is allowed but in case of variable name not allowed
// console.log(object.for, object.let, object.return);

let object1 = {
  0: "hello",
};

// console.log("0", object1[0]);
// console.log("0", object1["0"]);

const user = {
  firstName: "Rohan",
  lastName: "kumar",
};

// console.log("firstName" in user);

// key is present but value is undefined how do you check the key existence

const checkObject = {
  key: undefined,
};

// check if key is available or not in object
// console.log(checkObject.key);
// console.log("key" in checkObject);

// we have two way to create a copy of an object by using clone and assign method of object

// in this case we are not copying the object to the target we are copying the reference itself
const user1 = user;
// user1.firstName = "Rahul";

// console.log("user1 firstName :", user1.firstName);
// console.log("user firstName :", user.firstName);

// let's using clone method
const user2 = {};
const user3 = {};

// clone method
for (let key in user) {
  user2[key] = user[key];
}

// assign method
const user4 = Object.assign({}, user);
Object.assign(user3, user);
// console.log(Object.assign(user3, user)); // return a new object

// console.log("user2 :", user2);
// console.log("user3 :", user3);
// console.log("user4 :", user4);
user2.firstName = "Rahul";
// console.log("user2 firstName :", user2.firstName);
// console.log("user firstName :", user.firstName);

const nestedUser = {
  name: "Rakesh",
  size: {
    height: 162,
    width: 50,
  },
};

let clone = Object.assign({}, nestedUser);
let spreadObject = { ...nestedUser }; // spread operator also doesn't do a deep copy
// console.log("spreadObject :", spreadObject.size === nestedUser.size);
// console.log("clone :", clone.size === nestedUser.size); // true  because while nested if still pointing a same property memory of size for that use deepcopy
// console.log("user4 === user :", user4, user, user4 === user); // false copying object
// console.log("user1 === user :", user1, user, user1 === user); // true copy with reference
let stringifiedObject = JSON.stringify(nestedUser);
let newDeepCopy = JSON.parse(stringifiedObject);
// gives you false it does a deep copy but has some flaw, that can't copy the non emumerable properties like function adn prototype properties
// console.log("newDeepCopy :", newDeepCopy, newDeepCopy.size === nestedUser.size);

// using recursion is the most reliable and effective method
const userDetails = {
  name: "Rohan Kumar",
  age: 20,
  destination: "Mumbai",
  address: {
    state: "Uttar pradesh",
    city: "Ghaziabad",
    county: "India",
  },
  getUserDetails: function () {
    console.log("name :", this.name);
    console.log("age :", this.age);
    console.log("destination :", this.destination);
    console.log(
      "address :",
      this.address.city + ", " + this.address.state + ", " + this.address.county
    );
  },
};

// userDetails.getUserDetails();

var deepCopy = function (srcObj, destObj) {
  for (key in srcObj) {
    if (typeof srcObj[key] !== "object") {
      destObj[key] = srcObj[key];
    } else {
      destObj[key] = {};
      deepCopy(srcObj[key], destObj[key]);
    }
  }
};

const deepCopyObject = {};
deepCopy(userDetails, deepCopyObject);

function person() {}
person.prototype.gender = "male";

let obj = new person();

// console.log(obj.hasOwnProperty("gender"));

// console.log(deepCopyObject);

// console.log(userDetails);

const objectProperty = {
  foo: 1,
  random: "as",
  propertyIsEnumerable() {
    return false;
  },
};

// console.log(objectProperty.propertyIsEnumerable("foo"));
// console.log(
//   Object.prototype.propertyIsEnumerable.call(objectProperty, "random")
// );

const emptyObject = {};
const nullObject = Object.create(null);

// console.log(emptyObject);
// console.log(nullObject);
// alert(emptyObject);
// alert(nullObject);

// console.log(emptyObject.valueOf());
// console.log(nullObject.valueOf());
console.log(emptyObject.hasOwnProperty("p"));
console.log(Object.prototype.hasOwnProperty("p"));
// console.log(nullObject.valueOf());

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
var findJudge = function (n, trust) {
  let trustedPerson = [];
  let countPerson = [];

  if (trust.length === 0) {
    return n;
  } else {
    for (let i = 0; i < trust.length; i++) {
      let person = trust[i];
      if (!trustedPerson.includes(person[0])) {
        console.log(person[0] + " trust on " + person[1]);
        if (!trustedPerson.includes(person[1])) {
          trustedPerson.push(person[1]);
          countPerson.push(1);
        } else {
          const index = trustedPerson.findIndex((item) => item === person[1]);
          countPerson[index] = countPerson[index] + 1;
        }
      } else {
        console.log(person[0] + "not trust on" + person[1]);
        const index = trustedPerson.findIndex((item) => item === person[0]);
        trustedPerson.splice(index, 1);
        countPerson.splice(index, 1);
      }
      console.log("trustedPerson :", trustedPerson);
      console.log("countPerson :", countPerson);
    }
  }

  if (trustedPerson.length === 0) {
    return -1;
  } else if (trustedPerson.length < 2) {
    const count = countPerson.pop();
    return count === n - 1 ? trustedPerson.pop() : -1;
  } else {
    const index = countPerson.findIndex((item) => item === n - 1);
    return index > -1 ? trustedPerson[index] : -1;
  }
};

// [[1,2]]
// [[1,3],[2,3]]
// [[1,3],[2,3],[3,1]]
// [[1,3],[1,4],[2,3]]
// [[1,2],[3,2],[1,3],[4,1],[3,1],[2,1],[2,3],[4,3],[4,2],[3,4],[2,4]]
const trustArray = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
];
const number = 4;

console.log(findJudge(number, trustArray));
