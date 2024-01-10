/** 
Map
Map keys can be of any value, including functions, objects, and primitives.
while the keys of an object must either be strings or symbols.
Map does not contain any keys by default but Object has a prototype, so it contains defaul keys.
*/
const map = new Map();
// Set key value pairs
map.set("key1", "value1");
console.log(map.size);
console.log(map.get("key1"));

map.set("key2", "value2");
console.log(map.has("key2"));

//Iterating Map
for (let [key, value] of map) {
  console.log(key + "=" + value);
}
//Iterating only keys
for (let key of map.keys()) {
  console.log(key);
}

//Itearting only values
for (let value of map.values()) {
  console.log(value);
}

//Iterating both keys and values
console.log(map.entries());
for (let item of map.entries()) {
  console.log(item);
}

//Map and Array conversion
const personArray = [
  ["firtsName", "Jhon"],
  ["lastName", "Doe"],
];
const personMap = new Map(personArray);
console.log(personMap);

const arr = Array.from([map, personMap]);
console.log(arr);

//Map and Object conversion
const personObject = {
  firstName: "Jhon",
  lastName: "Doe",
};
const personMap2 = new Map(Object.entries(personObject));
console.log(personMap2);

//delete a key from map
map.delete("key2");
console.log(map.get("key2"));
console.log(map.delete("key2"));

//clear all key values
map.clear();
console.log(map.size);
