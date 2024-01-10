/** 
Map
Map keys can be of any value, including functions, objects, and primitives.
while the keys of an object must either be strings or symbols.
Map does not contain any keys by default but Object has a prototype, so it contains defaul keys.
*/
const map = new Map();
map.set('key1', 'value1');
console.log(map.size);
console.log(map.get('key1'));

map.set('key2', 'value2');
console.log(map.has('key2'));
map.delete('key2');
console.log(map.get('key2'));
console.log(map.delete('key2'));

map.clear();
console.log(map.size);
