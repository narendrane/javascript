/**
1. When a variable is bound to an environment other procedures(functions) that are defined in the environment have access to that variable value.
2. When a varibale is defined inside the function, It is only accessible within that function scope and any nested functions.
*/
const a = 10;
function outer() {
  const b = 20;
  function inner() {
    let a = 2;
    const c = 30;
    console.log(a, b, c);
  }
  inner();
}
console.log("Lexical Scopes");
outer();
