// setInterval(() => {
//   console.log("I am called");
// }, 1000);

// setInterval(function, time, argument1, argument2);

// let start = 0;
// let count = (count, message) => {
//   console.log(`${message} is ${count}`);
// };

// default value of timer is 10 millisecond
// setInterval(function () {
//   count(start++, "count");
// });

// it return value star 0 because It accessing the global scope
// setInterval(count, 1000, start++, "count");

// let increment = {
//   count: 1,
//   start: function () {
//     var that = this;
//     // setInterval(function () {
//     //   console.log("count", that.count++);
//     // }, 1000);
//     setInterval(() => {
//       // we don't need any that reference for the same
//       console.log("count", this.count);
//     }, 1000);
//   },
// };

// increment.start();

// clearing timeout
// let start = setInterval(() => {
//   console.log("I just started");
//   clearMe();
// });

// let clearMe = () => {
//   clearInterval(start);
// };

function clock() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  console.log(`${h}:${m}:${s}`);
}

// setInterval(() => {
//   clock();
// }, 1000);

// using settimeout create setInterval we can recursively call fn to mimic setInterval
// let increment = (num) => {
//   setTimeout(() => {
//     console.log("num :", num);
//     num++;
//     increment(num);
//   }, 1000);
// };

// increment(1);

// create clear all time out method which clear all the timer running on the code
// const myTimers = {
//   timeoutIds: [],
//   setTimeout: function (fn, delay) {
//     let id = setTimeout(fn, delay);
//     this.timeoutIds.push(id);
//     return id;
//   },
//   clearAllTimeout: function () {
//     while (this.timeoutIds.length) {
//       this.clearAllTimeout(this.timeoutIds.pop());
//     }
//   },
// };

// function callback() {
//   console.log("Timer");
// }

// myTimers.setTimeout(callback, 1000);
// myTimers.clearAllTimeout();
// window.timeoutIds = [];

// window.clearAllTimeout = function () {
//   while (timeoutIds.length) {
//     clearTimeout(timeoutIds.pop());
//   }
// };

// const orginalTimeoutFunction = window.setTimeout;
// window.setTimeout = function(fn, delay) {
//   const id = orginalTimeoutFunction(fn, delay);
//   timeoutIds.push(id);
//   // return a is so that it can be orginally cleared;
//   return id;
// }

let start = 0;
let delay = 1000;

const callbackfunction = () => {
  document.getElementById("count").textContent = start;
  console.log("count :", start++, delay);
};

// let interval = setInterval(callbackfunction, delay);

function increment() {
  clearInterval(interval);
  delay = delay + 100;
  interval = setInterval(callbackfunction, delay);
}

function decrement() {
  clearInterval(interval);
  delay = delay - 100;
  interval = setInterval(callbackfunction, delay);
}
// const textElement = document.getElementById("count");

// function updateTime() {
//   let currentTime = new Date();
//   let miliSecondsTime = currentTime.getTime();
//   let currentTimeUTC = currentTime.toUTCString();
//   let h = currentTime.getHours();
//   let m = currentTime.getMinutes();
//   let s = currentTime.getSeconds();
//   // console.log(`${h}:${m}:${s}`);
//   // console.log("currentTime :", currentTime);
//   textElement.textContent = `${h}:${m}:${s}`;
//   // dateTimeShowFunction(time, currentTimeUTC);
//   // console.log(`${h}:${m}:${s}`);
//   // timeShowFunction(`${h}:${m}:${s}`);
//   setTimeout(updateTime, 2000);
// }

// updateTime();

// setInterval(updateTime, 1000);
// setInterval(updateTime, 1000);

// timer in seconds
// let timer = 10;
// const timeout = setInterval(() => {
//   timer--;
//   console.log("timer :", timer);
//   if (timer === 0) {
//     clearInterval(timeout);
//     console.log("timer up's");
//   }
// }, 1000);
