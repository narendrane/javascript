/** 
Iterables and Iterators
*/

const string = "Welcome";
for (let i = 0; i < string.length; i++) {
  console.log(string.charAt(i), string[i]);
}
for (const str of string) {
  console.log(str);
}
console.log(typeof string[Symbol.iterator]);
const array = [1, 2, 3, 4, 5];
for (const arr of array) {
  console.log(arr);
}
console.log(typeof array[Symbol.iterator]);

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};
console.log(typeof obj[Symbol.iterator]);
for (const word of obj) {
  console.log(word);
}
const iterator = obj[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const numObj = {
  [Symbol.iterator]: function (start = 0, end = 10, interval = 1) {
    let step = start;
    const iterator = {
      next: function () {
        step = step + interval;
        for (let i = 0; i <= end; i++) {
          if (i === step) {
            return { value: i, done: false };
          }
        }
        return { done: true };
      },
      return: () => {
        console.log("Cleaning up");
        return { done: true };
      },
    };
    return iterator;
  },
};
for (const num of numObj) {
  console.log(num);
}

const iterator1 = numObj[Symbol.iterator](1, 10, 2);
let result = iterator1.next();
while (!result.done) {
  console.log(result.value);
  result = iterator1.next();
}
