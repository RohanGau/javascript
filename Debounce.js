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
