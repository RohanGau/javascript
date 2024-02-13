const object = {
  name: "Rohan",
  city: "Ghaziabad",
  getInfo: function () {
    console.log(`${this.name} from ${this.city}`);
  },
};

const array = ["item1", "item2"];

function getInfo() {
  console.log("printing getInfo method");
}

Function.prototype.bind = function () {
  console.log("this is bind method");
};

function fn() {
  console.log("this is fn function");
}

fn.bind();

const object1 = {
  name: "Rohan",
  city: "Ghaziabad",
  getInfo: function () {
    console.log(`${this.name} from ${this.city}`);
  },
};

const object2 = {
  name: "Gaurav",
};

object2.__proto__ = object1;

const myDate = new Date(1995, 11, 17);

console.log(myDate.getFullYear());

myDate.getFullYear = function () {
  console.log("something else!!");
};

myDate.getFullYear();
// let dateObject = myDate;

// do {
//   dateObject = Object.getPrototypeOf(dateObject);
//   console.log("dateObject :", dateObject);
// } while (dateObject);

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// person.prototype.greet = protoTypePerson.greet;

// const carl = Object.create(protoTypePerson);

// console.log(carl);

const newObject = new Person("Rohan");
newObject.greet();
// const reuben = new Person("Reuben");
// reuben.greet();
