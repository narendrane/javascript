/** 
Generators - are special class of function that simplify the task of writing Iterators
A Generator function can "pause" the execution
'yield' is used to pause the execution and yields a value
Each Generator object may only be iterated once
- return sets the done flag to true after which the generator cannot generate anymore values.
*/
function* generators(){
  yield  'Hello'
  yield  'World'
}
const generator = generators();
for(const word of generator){
  console.log(word)
}
console.log([...generator]);


// Generator with return
function* generators1(){
  yield  'Hello'
  return 'World'
}
const generator1 = generators1();
for(const word of generator1){
  console.log(word)
}
console.log(generator1.next());

// Generator exercise

function* countGenerator(start = 1, end = 10, limit = 1) {
  let count = start;
  while (count <= end) {
    yield count;
    count = count + limit;
  }
}
const counter = countGenerator(10, 20, 2);
for (const count of counter) {
  console.log(count);
}
//outputs: 10, 12, 14, 16, 18, 20
