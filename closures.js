/**
1. The combination of the function and its scope chain (lexical environment) is what is called a closure in Javascript
2. The combination of function bundled together with references to its surrounding state (the Lexical environment). 
*/
console.log("closures");
function closures() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = closures();
fn();
fn();
console.log("Memoized Square");
function squares(n) {
  return n * n;
}

function add(a, b) {
  return a + b;
}

function memoizedSquare() {
  let cache = {};
  return function inner(num) {
    if (!(num in cache)) {
      console.log("Computing Square");
      cache[num] = squares(num);
    }
    console.log("Returning Square");
    return cache[num];
  };
}
const msquare = memoizedSquare();
console.log(msquare(500));
console.log(msquare(500));

function memoizeCallBack(callbackfn) {
  let cache = {};
  return function inner(...args) {
    const key = args.toString;
    if (!(key in cache)) {
      console.log("Computing");
      cache[key] = callbackfn(...args);
    }
    console.log("Returning");
    return cache[key];
  };
}
const memoizedAdd = memoizeCallBack(add);
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
const memoizedSq = memoizeCallBack(squares);
console.log(memoizedSq(500));
console.log(memoizedSq(500));
