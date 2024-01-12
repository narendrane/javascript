/** 
callback functions - A function that is passed as an argument to another function.
Higher order function (HOC) - A function that takes another function as an argument or returns another function.
*/

/** 
Synchronous callback - A callback function that is executed Immediately.
example: sort, filter, map, forEach, reduce, find, every, some, findIndex, findLastIndex

Asynchronous callback - An Asynchronous callback is a callback that is often used to continue or resume code execution after a synchronous operation has been completed.
Example: setTimeout, setInterval

callback hell - A callback hell is a nested callback function that is difficult to read and maintain.

Promises are used to handle the callback hell.
*/

function greet(name) {
  console.log(`Hello ${name}`);
}

function higerOrderFunction(callback) {
  const innerName = "Jane";
  callback(innerName);
}

higerOrderFunction(greet);

//Here the callback is attached only on click. (Asynchrous))
function callBackFunction() {
  console.log(i);
  console.log("You clicked on button # " + i);
}
// element.addEventListener('click', callBackFunction);
/** 
Promise is simply an object in Javascript.
Promise has three states pending, fulfilled, rejected.
6 steps of promises:
Promise, Promise value, fulfill promise, reject promise, success callback and failure callback.
// resolve - changes the state of the promise from pending to fulfilled
// reject - changes the state of the promise from pending to rejected
*/

const onFulfillment = (result) => {
  //  resolve was called
  console.log("Promise is fullfilled with value: " + result);
};

const onRejection = (result) => {
  // reject was called
  console.log("Promise is rejected with value: " + result);
};

const promise = new Promise((resolve, reject) => {
  let result = false;
  setTimeout(() => {
    //Change the status to fulfilled
    result = true;
    resolve(result);
  }, 2000);

  //  to reject
  setTimeout(() => {
    //Change the status to rejected
    reject(result);
  }, 2000);
});

console.log(promise);

// when resolved then() will be executed
promise.then(onFulfillment);

//when rejected catch() will be executed
// catch will also catch the errors from fulfillment
promise.catch(onRejection);

//  Chaining Promises
// can be written as promise.then(onFulfillment).catch(onRejection);
//  Promise.then()
//.then()
//.then()

/** 
Promise Static methods
1. Promise.all() - waits for all promises to resolve and returns the array of their results. If any one fails, it becomes the error
2. Promise.allSettled() - waits for all the promises to settle regardless of whether or not one of them is rejected.
3. Promise.race() - waits for the first promise to settle and its result/error becomes the outcome.
*/
const promise1 = Promise.resolve(3);
const promise2 = 43;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log("Error " + error);
  });
// outputs [3, 43, "foo"]

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

Promise.race([promise1, promise2, promise3]).then((values) => {
  console.log("Race: ", values);
});

