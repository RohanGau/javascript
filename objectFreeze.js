const obj = {
  prop: 42,
};

Object.freeze(obj);
obj.prop = 21;
// console.log(obj.prop, obj);
// Object.freeze(new Uint8Array(0));
// Object.freeze(new Uint8Array(1));
// console.log(Object.freeze(new DataView(new ArrayBuffer(32))));
// Object.freeze(new DataView(new ArrayBuffer(32)));

const obj2 = {
  pop() {},
  foo: "bar",
};

obj2.foo = "baz";
obj2.lumpy = "woof";
delete obj2.pop;

const o = Object.freeze(obj2);
// console.log(obj2 === o); // getting you true
// console.log(obj2, o);
// console.log(Object.isFrozen(o));  // getting you true
obj2.foo = "asss";
obj2.quaxxor = "random string";
// console.log(obj2, o);

function fail() {
  "use strict";
  obj2.foo = "sparky"; // in strict mode it throws you error
  delete obj2.foo;
  delete obj2.quaxxor;
  obj2.sparky = "arf";
}

// fail();

// Object.defineProperty(obj2, "ohai", { value: 20 });
// Object.defineProperty(obj2, "foo", { value: "eat" }); // getting you typeError Uncaught TypeError: "foo" is read-only

// console.log(obj2, o);

// freezing error
const a = [0];
Object.freeze(a);
a[0] = 1;

function ArrayFail() {
  "use strict";
  a[0] = 1; // Uncaught TypeError: 0 is read-only
}

// ArrayFail();

a.push(12); // Uncaught TypeError: can't define array index property past the end of an array with non-writable length

// console.log(a);


