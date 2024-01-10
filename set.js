/** 
Set
The Set Object in JavaScript lets you store unique values of any type.
A value in the set may only occur once; it is unique in the set's collection. 
*/
const set = new Set();
// Add value to set
set.add("value1");
console.log(set.size);
console.log(set);

set.add("value2");
console.log(set);
console.log(set.has("value2"));

//Iterating Set
for (let value of set) {
  console.log(value);
}
//The set.keys() method is the same as the values() method. This means it returns the new iterator object that contains the value of each set in the insertion order.

const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.keys();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"

let myset = new Set();

// Adding new element to the set
myset.add("California");
myset.add("Seattle");
myset.add("Chicago");

// Creating a iterator object
const setIterator = myset.values();

// Getting values with iterator
let i = 0;
while (i < myset.size) {
  console.log(setIterator.next().value);
  i++;
}
let fruits = new Set();
fruits.add("Mango");
fruits.add("Banana");
fruits.add("Papaya");
fruits.add("Grapes");

function display(i) {
  console.log(i);
}
fruits.forEach(display);

//The Set.entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in the order of their insertion. Although a Set does not contain key-value pairs, to keep similarities with the map.entries() method, it will return key-value pairs where both key and value will have the same value.

// Creating an iterator object
const setIterator1 = myset.entries();

// Getting values with iterator
console.log(setIterator1.next().value);
console.log(setIterator1.next().value);
console.log(setIterator1.next().value);

//delete
console.log(myset.delete("Chicago"));
console.log(myset);

// The clear() method will remove
// all elements from the set
myset.clear();

// This will return 0 as there
// are no elements present in the Set
console.log(myset.size);

//Array to set
const personArray = ["Jhon", "Doe", "Jhon"];
const personSet = new Set(personArray);
console.log(personSet);

//Set to Array
const setArr = [...personSet];
console.log(setArr);
