let counter = 0;

const getData = () => {
  console.log("fetching data :", counter++);
};


const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const searchFunction = debounce(getData, 300);

// advance debouncing implementation with leading and trailing

function debounce(func, wait, option = {leading: false, trailing: true}) {
  let timer;
  return function(...args) {
    const context = this;
    const callNow = option.leading && !timer;

    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if(option.trailing && !callNow) {
        func.apply(context, args);
      }
    }, wait);

    if(callNow) {
      func.apply(context, args);
    }
  }
}
