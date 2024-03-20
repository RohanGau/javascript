const button = document.getElementById("action");

const throttling = function (fn, delay) {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    console.log(now - prev, delay);
    if (now - prev > delay) {
      prev = now;
      return fn(...args);
    }
  };
};

button.addEventListener(
  "click",
  throttling(() => {
    console.log("button is clicked");
  }, 1500)
);

const updateLayout = () => {
  console.log("change layout", Math.random());
};

function throttle(fn, interval) {
  let isRunning = false;
  return function (...args) {
    if (isRunning) return;
    isRunning = true;
    fn.apply(this, args);
    setTimeout(() => {
      isRunning = false;
    }, interval);
  };
}

const throttleUpdateLayout = throttle(updateLayout, 1000);

window.addEventListener("resize", () => {
  throttleUpdateLayout();
});
