function* fun() {
  yield 10;
  yield 20;
  yield 30;
  yield 40;
}

let gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


function* nextNatural() {
  let number = 1;
  while(true) {
    yield number++;
  }
}

let naturalNumber = nextNatural();

// for(let i = 0; i < 10; i++) {
//   console.log(naturalNumber.next().value);
// }

let array = ['a', 'b', 'c'];

function* manually(arr) {
  let i = 0;
  while(i < arr.length) {
    yield arr[i++];
  }
}

function* generator() {
  yield 1;
  yield* array;
  yield 2;
}

for(let value of generator()) {
  console.log(value);
}

const it = manually(array);

// console.log(it.next());

let createOwnIterable = {
  *[Symbol.iterator]() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
}

for(let value of createOwnIterable) {
  console.log(value);
}

function* generator2() {
  yield 1;
  return 5;
  yield 2;
}


let obj = generator2();
console.log(JSON.stringify(obj.next()));
// {value: "a", done: false}
console.log(JSON.stringify(obj.next()));
console.log(JSON.stringify(obj.next()));

