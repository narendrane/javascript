/** 
Prototype: In Javascript, every function has an object called prototype which allow us to share methods across all instances of that function.
*/
function PersonObj(name) {
  this.name = name;
  //  let personPrototype = Object.create(PersonObj.prototype);
  // personPrototype.name = name;
  //  return personPrototype;
}
PersonObj.prototype.sayMyName = function () {
  return `My name is ${this.name}`;
};
PersonObj.prototype.eat = function (food) {
  return `My favourite food is ${food}`;
};
PersonObj.prototype.hobby = function (hobby) {
  return `My hobby is ${hobby}`;
};

const naren = new PersonObj("Naren");
const dev = new PersonObj("Dev");
console.log(naren.sayMyName());
console.log(dev.sayMyName());
console.log(dev.hobby("Games"));
console.log(naren.eat("Pizza"));
console.log(Object.getPrototypeOf(naren));
console.log(naren.constructor);
console.log(naren instanceof PersonObj);
