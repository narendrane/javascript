/** 
Arrow Function
Introduced in ES6
Concise statement
Lexical Binding
*/
const normalFunction = {
  firstName: "Narendran",
  lastName: "Ethiraj",
  sayMyName() {
    return `My Fullname is ${this.firstName} ${this.lastName}`;
  },
};
console.log(normalFunction.sayMyName());

const arrowFunction = {
  firstName: "Narendran",
  lastName: "Ethiraj",
  sayMyName() {
    const fullName = () => {
      return `${this.firstName} ${this.lastName}`;
    };
    console.log(`My Fullname is ${fullName()}`);
  },
};
arrowFunction.sayMyName();
// Exercise
const arrowExercise = {
  name: "Naren",
  hobbies: ["Cricket", "Chess"],
  printBio() {
    const printHobbies = () => {
      return `${this.hobbies[0]} and ${this.hobbies[1]}`;
    };
    console.log(`My name is ${this.name} and my hobbies are ${printHobbies()}`);
  },
};
arrowExercise.printBio();
