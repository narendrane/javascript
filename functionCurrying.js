/**
Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
*/
console.log("********** Function Currying **********");
function sum(a, b, c) {
  return a + b + c;
}
function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(4));
console.log("********** Function Currying - Logging **********");
function log(date, importance, message) {
  return `[${date.getHours()}:${date.getMinutes()}], [${importance}], ${message}`;
}
log(new Date(), "INFO", "This is a message");

const curriedLog = curry(log);
console.log(curriedLog(new Date())("ERROR")("Firstname cannot be null"));

const logNow = curriedLog(new Date());
console.log(logNow("ERROR")("Lastname cannot be null"));
console.log(logNow("INFO")("User logged out!"));

const logErrorNow = curriedLog(new Date())("ERROR");
console.log(logErrorNow("System Error!"));
console.log(logErrorNow("Reference Error!"));

/**
Generic currying to accept multiple arguments
*/
function genericCurry(fn) {
  return function currify(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...newArgs) {
        return currify.apply(this, args.concat(newArgs));
      };
    }
  };
}

function genericCurryTwo(fn) {
  return function currify(...args) {
    return args.length >= fn.length
      ? fn.apply(this, args)
      : currify.bind(this, ...args);
  };
}

const gcurriedSum = genericCurry(sum);
const gcurriedSumTwo = genericCurryTwo(sum);
console.log(curriedSum(2)(3)(4));
console.log("gcurriedSum", gcurriedSum(2)(3, 5));
console.log("gcurriedSum", gcurriedSumTwo(2)(3, 5));
