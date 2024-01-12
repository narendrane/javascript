/** 
Event Loop

The JS Environment consists of
1. Memory Heap - Whenever a variable or function is declared memory is allocated in the heap.
2. Call Stack - Whenever a function is called, the function is pushed into the call stack. when returns it is popped out from the stack.
3. Web APIs - Browser functions like setTimeout, setInterval, XMLHttpRequest, etc.
4. Event Loop - Checks if the call stack is empty and if the call stack is empty, checks if there are any pending tasks in the event loop. If there are any pending tasks, it pushes the task into the call stack.
5. Callback queue / Task queue - when the Web APIs are done, they are pushed into the callback queue.
6. Microtask Queue - when the callback queue is done, it pushes the microtasks into the microtask queue. such as fulfilling promise values.
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

