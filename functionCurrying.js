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
