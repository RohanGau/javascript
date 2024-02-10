// Example number 1

const promise1 = new Promise((resolve, reject) => {
  console.log("1");
  resolve();
});
// First, the first four lines of this code are executed. The console will print out 1, and then promise1 will turn into a resolved state.

// Then start executing the promise1.then(() => {console.log(3);}); snippet. Because promise1 is now in the resolved state, the () => {console.log(3);} will be added to the microtask queue immediately.

// But we know () => {console.log(3);} is a microtask, so it is not immediately called.

// Then the last line of code (console.log(4);) is executed and 4 is printed in the console.

// At this point, all the synchronized code, the current macrotask, is executed. Then the JavaScript engine checks the queue of microtasks and executes them in turn.

// () => {console.log(3);} is then executed and 4 is printed in the console
promise1.then(() => {
  console.log("3");
});

console.log("4");

// Example number 2

const promise1 = new Promise((resolve, reject) => {
  console.log("1");
});

// This example is very similar to the previous one, except that in this one, promise1 will always be in a pending state, so () => {console.log(3);} won't be executed and the console won't print 3.

promise1.then(() => {
  console.log("2");
});

console.log("3");

// Example number 3

const promise1 = new Promise((resolve, reject) => {
  console.log("1");
  resolve("resolve 1");
});

// First, the first four lines of code are the same as before, 1 is printed in the console, and the state of promise1 is resolved.

// Then execute const promise2 = promise1.then(...), res => {console.log(res)} is added to the microtask queue. At the same time, promise1.then() will return a new pending promise object.

// Then execute console.log(‘promise1:', promise1);, and the console prints out the string 'promise1' and the promise1 in the resolved state.

// Then execute console.log(‘promise2:', promise2);, and the console prints out the string ‘promise2' and the promise2 in the pending state.

// At this point, all the synchronized code, the current macrotask, is executed. Then the JavaScript engine checks the queue of microtasks and executes them in turn.

// res => {console.log(res)} is the only task in the microtask queue, and it will be executed now. And then the console will print 'reslove1'.

const promise2 = promise1.then((res) => {
  console.log(res);
});

console.log("promise1:", promise1);
console.log("promise2:", promise2);

// output
// promise1:
// Promise { <state>: "fulfilled", <value>: "resolve 1" }
// promise2:
// Promise { <state>: "pending" }
// resolve 1

// Example number 4

const fn = () =>
  new Promise((resolve, reject) => {
    console.log("1");
    resolve("success");
  });

fn().then((data) => {
  console.log(data);
});

console.log("2");

// Example number 5

console.log("start");
setTimeout(() => {
  console.log("setTimeout");
});

Promise.resolve().then(() => {
  console.log("resolve");
});
console.log("end");

// start
// end
// resolve
// setTimeout

// Example number 6

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("time start");
    resolve("success");
    console.log("time end");
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);

// 1
// 2
// 4
// time start
// time end
// success

// Example number 7

const timer1 = setTimeout(() => {
  console.log("timer 1");
  const timer3 = setTimeout(() => {
    console.log("timer 3");
  }, 0);
}, 0);

const timer2 = setTimeout(() => {
  console.log("timer 2");
}, 0);

console.log("start");

// start
// timer 1
// time 2
// timer 3

// Example 8

const timer1 = setTimeout(() => {
  console.log("timer 1");
  const promise = Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

const timer2 = setTimeout(() => {
  console.log("timer 2");
}, 0);

console.log("start");

// start
// timer 1
// promise 1
// timer 2

// Example 9

const promise = Promise.resolve().then(() => {
  console.log("promise 1");
  const timer2 = setTimeout(() => {
    console.log("timer 2");
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log("timer 1");
  const promise2 = Promise.resolve().then(() => {
    console.log("promise 2");
  });
}, 0);

console.log("start");

// start
// promise 1
// timer 1
// promise 2
// timer 2

// Example 10

const promise1 = new Promise((resolve, reject) => {
  const timer1 = setTimeout(() => {
    resolve("success");
  }, 1000);
});

const promise2 = new Promise(() => {
  throw new Error("error!!!");
});

console.log("promise1", promise1);
console.log("promise2", promise2);

const timer2 = setTimeout(() => {
  console.log("promise1", promise1);
  console.log("promise2", promise2);
}, 2000);

// promise1 "promise object in pending state"
// promise2 error!!
// promise1 success after 1 second
// after 1 second print promise1 success
// promise2 error!!
