/** 
Asynchronous
Javascript is synchrounous, blocking and single-threaded language.  
synchronous - Code executes top down executing one line at a time.
Blocking - Code is not allowed to execute until the current line of code has finished executing.
Single-threaded - A thread is simply a process that your javascript program can use to run a task.
Each thread can do only one task at a time.
Just has one just that the one thread called main thread for executing the code.

Web browsers define functions and API's that allow us to register functions that should not be executed synchronously, and should be invoked asynchronously when some kind of event  occurs.

Debounce and Throttle - limits the number of times a function can execute.
Throttling - is a techique in which, no matter how many times the user fires the event, the attched function will execute only once in a given time interval.
Debounce - is a techique in which, no matter how many times the user fires the event, the attched function will execute only after the specified time once the user stops firing the event.
*/
//setTimeOut - Executes a function after a specific time has elapsed.
//setTimeout(function, milliseconds, parameter1, parameter2, parameter3...))
function greet(name) {
  console.log("Hello " + name);
}
const timeoutId = setTimeout(greet, 2000, "John");
//clearTimeout(timeoutId);

const intervalId = setInterval(greet, 2000, "John");
//clearInterval(intervalId);

//recursive setTimeout
function run(name) {
  console.log("Howdy " + name);
  setTimeout(run, 1000, "Naren");
}
const timeoutId1 = setTimeout(run, 1000, "Naren");

const intervalId1 = setInterval(greet, 1000, "John");


// Implementing throtttle function.
function greet2(args) {
  console.log("Greeting! " + args);
}

function throttle(func, limit) {
  let flag;
  return function () {
    if (!flag) {
      func.apply(this, arguments);
      flag = true;
      setTimeout(() => {
        flag = false;
      }, limit);
    }
  };
}
const throttledGreet = throttle(greet2, 1000);
throttledGreet("Happy Morning");
throttledGreet("Good Luck!");
throttledGreet("All the best!");
throttledGreet("1");
throttledGreet("2");
throttledGreet("3");
throttledGreet("4");
throttledGreet("5");

// Implementing Debounce function.

function debounce(func, delay) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}
const debounceGreet = debounce(greet2, 1000);
debounceGreet("Happy Morning");
debounceGreet("Good Luck!");
debounceGreet("All the best!");
debounceGreet("1");
debounceGreet("2");
debounceGreet("3");
debounceGreet("4");
debounceGreet("5");
debounceGreet("6");
