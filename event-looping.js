/** 
Event Loop

The JS Environment consists of
1. Memory Heap
2. Call Stack
3. Web API's
4. Event Loop
5. Callback queue / Task queue
6. Microtask Queue - 
*/
function eventLoop() {
  setTimeout(() => {
    console.log("Event Loop");
  }, 2300);

  const promise = fetch("https://api.github.com/users/narendrane");
  promise.then((res) => res.json()).then((data) => console.log(data));

  for (let i = 0; i < 1000000000; i++) {
    i++;
  }

  console.log("Final Console");
}
eventLoop();
