console.log("Hello");

// Object literals where we have a body of the object and define property inside it.
const object = {
  firstName: "Rohan",
  lastName: "Kumar",
  getInfo: function() {
    console.log(this.firstName);
    console.log(this.lastName);
  }
}

object.getInfo()

// constructor function --> new keyword create a multiple instance of the object
function PersonInfo(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getInfo = function() {
    console.log(this.firstName + " " + this.lastName);
  }
}

const contructorFunction1 = new PersonInfo("Rohan", "kumar");
const contructorFunction2 = new PersonInfo("Ramesh", "Saini");
contructorFunction1.getInfo();
contructorFunction2.getInfo();

// object  create --> method create a new object with specific prototype object.method provide more control over the prototype of the newly created object
let personProto = {
  getInfo: function() {
    console.log(this.firstName + " " + this.lastName);
  }
}

const objectCreate = Object.create(personProto);
objectCreate.firstName = "Rohan";
objectCreate.lastName = "Kumar";
objectCreate.getInfo();

// factory function --> return a object --> more encapsulate object creation and easily create multiple instances

function FactoryFunction(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getInfo: function() {
      console.log(this.firstName + " " + this.lastName);
    }
  }
}

let person1 = FactoryFunction("Aarti", "Gautam");
let person2 = FactoryFunction("Aarti", "Gautam");
person1.getInfo();

// class syntax
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getInfo = function() {
    console.log(this.firstName + " " + this.lastName);
  }
}

const object1 = new Person("Aditya", "Shukla");
object1.getInfo();

// object setPropertyOf --> set the property of the specific object

let objectSetProperty = {};
objectSetProperty.firstName = "Raman";
objectSetProperty.lastName = "Desai";
Object.setPrototypeOf(objectSetProperty, personProto);
objectSetProperty.getInfo();

// Object Assign --> create a new object by copying all the enumerable own properties from one or more source object to the target object. create a merging object and create a shallow copy

const object2 = {
  Address: "Girdhar Enclave",
}

const mergeObject = Object.assign(object, object2);
console.log(mergeObject);

// prototype inheritance --> allowing object inherit property and methods from the other object.
// create obejct by leveraging the protoypal inheritance and using hte prototype property of constructor function and class define shared behaviour
function Animal(name) {
  this.name = name;
}

Animal
.prototype.greet = function() {
  return "Hello I'm " + this.name;
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let myDog = new Dog("max", "pitbull");
console.log(myDog.greet());

// singleTone pattern -> restrict an object to a single instance. combination of closure and immediately invoke function expression
// ensure only one instance will create

let Singleton = (() => {
  let instance;
  function createInstance() {
    const object = new Object("I am the instance");
    return object;
  }

  return {
    getInstance: () => {
      if(!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
