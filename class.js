class Person {
  constructor(username) {
    this.username = username;
  }
  sayMyName() {
    return `My name is ${this.username}`;
  }
  eat(food) {
    return `My favourite food is ${food}`;
  }
  hobby(hobby) {
    return `${this.name}'s hobby is ${hobby}`;
  }
}

class Programmer extends Person {
  constructor(username, language) {
    super(username);
    this.language = language;
  }
  code() {
    console.log(`I can code on language ${this.language}`);
  }
}

const naren2 = new Programmer("Naren", "Javascript");
console.log(naren2.sayMyName());
naren2.code();
