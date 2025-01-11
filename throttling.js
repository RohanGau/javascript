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

 function throttleWithTimer(fn, delay) {
    let timer = null;
    return function (...args) {
      const context = this;
      if (!timer) {
        timer = setInterval(() => {
          fn.apply(context, args);
          timer = null;
        }, delay);
      }
    };
  }


const throttleUpdateLayout = throttle(updateLayout, 1000);

window.addEventListener("resize", () => {
  throttleUpdateLayout();
});


// important concept of cold down logic
function throttle(func, wait) {
    let waiting = false;
    let lastArgs = null;
    
    function startCooling() {
        setTimeout(() => {
           if(lastArgs) {
               func.apply(this, lastArgs);
               lastArgs = null;
               startCooling();
           } else {
               waiting = false;
           }
        }, wait);
    }
    
    return function(...args) {
        if(!waiting) {
            func.apply(this, args);
            waiting = true;
            startCooling();
        } else {
            lastArgs = args;
        }
    }
    
}


// advance throttling logic
 function advanceThrottle(
    fn,
    delay,
    option = { leading: true, trailig: true }
  ) {
    let timer = null;
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      const context = this;

      if (option.leading && now - lastCall >= delay) {
        lastCall = now;
        console.log("leading call");
        fn.apply(context, args);
      }

      if (option.trailing && !timer) {
        timer = setInterval(() => {
          timer = null;
          lastCall = option.leading ? Date.now() : lastCall;
          console.log("trailing call");
          fn.apply(context, args);
        }, delay);
      }
    };
  }
