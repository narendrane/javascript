/** 
async await - 
Introduced in ES2017 ES(8)
The async keyword is used to declare a function that returns a promise.
The asyc await keywords allows us to write asynchronous code that looks like synchronous code.
*/

async function greet() {
  return "Hello";
}
console.log(greet()); // outputs: Promise { 'Hello' }

async function greet1() {
  return Promise.resolve("Greetings!");
}
greet1().then((value) => console.log(value));

// await keyword is used to pause the code until that promise settles and returns its result.
// it works only is async functions
async function greet2() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolving after 2 seconds");
      }, 1000);
    });
    let result = await promise; // waits until the promise settles and returns
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
greet2();

/** 
sequence vs concurrent vs parallel
*/
function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("World");
    }, 1000);
  });
}

async function sequentialStart() {
  const hello = await resolveHello();
  console.log("sequentialStart ", hello); // logs in 2 seconds
  const world = await resolveWorld();
  console.log("sequentialStart ", world); // logs 2 + 1 (3) seconds
}
sequentialStart();

async function concurrentStart() {
  const hello = resolveHello();
  const world = resolveWorld();
  console.log("concurrentStart ", await hello); // logs after 2 seconds
  console.log("concurrentStart ", await world); // logs after 2 seconds
}
concurrentStart();

async function parallel() {
  await Promise.all([
    (async () => {
      console.log("parallel ", await resolveHello()); // Logs in 2 secs
    })(),
    (async () => {
      console.log("parallel ", await resolveWorld()); // Logs in 1 secs
    })(),
  ]);
  console.log("Finally!");
}
parallel();

// sleep function
// the sleep function should suspend execution of the function it is invoked in.

function sleeper(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("*** Start ***");
  await sleeper(4000);
  console.log("*** End *** ");
}
main();
