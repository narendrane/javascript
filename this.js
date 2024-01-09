/** 
this keyword -in a function references the execution context for that particular call.
makes function reusable by letting you decide the context.
Order of precedence
1. New
2. Explicit
3. Implicit
4. Default
*/
function sayMyName(name) {
  console.log(`My name is ${name}`);
}
sayMyName("Naren");

// Implicit Binding
// here this refers to the function (person) hence person.name
const person = {
  name: "Naren",
  myName: function sayMyName() {
    console.log(`My name is ${this.name}`);
  },
};
person.myName();

// Explicit Binding
// Explicitly specify the context with which the function is called
const person1 = {
  name: "Dev",
};
function sayName(interest1, interest2) {
  console.log(
    `My name is ${this.name}. I am Interested in ${interest1} and  ${interest2}`,
  );
}
//call method - first argument is what the this is referencing.
//takes comma separated arguments
sayName.call(person1, "Chess", "Cricket");
//apply method - first argument is what the this is referencing.
//expects an array as the second argument.
sayName.apply(person1, ["Chess", "Cricket"]);
/** 
bind method
Similar to call function method but instead of invoking the function, 
it returns a new function that can invoke whenever you wish to.
*/
const sayDev = sayName.bind(person1, "Chess", "Cricket");
sayDev();
// new binding
function Person2(name) {
  this.name = name;
  console.log(`My name is ${this.name}`);
}
const p1 = new Person2("Naren");
const p2 = new Person2("Dev");
