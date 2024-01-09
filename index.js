function fibanocci(n) {
  const fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr;

  /* not optimal
  if(n<2){
    return n;
  }
  return fibanocci(n-1)+fibanocci(n-2);
  */
}
console.log(fibanocci(6));

const factorial = (n) => {
  return n < 2 ? 1 : n * factorial(n - 1);
};
console.log(factorial(2));

const prime = (n) => {
  if (n === 1) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};
console.log(prime(7));

function isPowerofTwo(n) {
  if (n < 1) {
    return false;
  }
  /*
  while(n>1){
    if(n%2 !== 0){
      return false;
    }
    n=n/2;
  }
  return true;
  */
  return (n & (n - 1)) === 0;
}

console.log(isPowerofTwo(2));

// Linear Search
function linearSearch(arr, target) {
  arr.sort((a, b) => a - b);
  return arr.findIndex((item) => item === target) || -1;
}
console.log(linearSearch([-5, 2, 10, 4, 6], 9));

// Binary Search - using Two pointers because the array is sorted
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    console.log("middleIndex -", middleIndex);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));

function removeDuplicates(nums) {
  const k = new Set(nums).size;
  return k;
}
console.log("removeDuplicates-", removeDuplicates([1, 1, 2]));

var removeElement = function (nums, val) {
  /*
let k=0;
for(let i=0; i<nums.length; i++){
  if(nums[i] !== val){
      console.log(nums[i]);
      nums[k] = nums[i];
      k++;
  }
}
return k;*/
  const k = nums.filter((num) => num !== val).length;
  return k;
};
console.log("removeElement-", removeElement([3, 2, 2, 3], 3));

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

console.log("closures");
function closures() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = closures();
fn();
fn();
console.log("Memoized Square");
function squares(n) {
  return n * n;
}

function add(a, b) {
  return a + b;
}

function memoizedSquare() {
  let cache = {};
  return function inner(num) {
    if (!(num in cache)) {
      console.log("Computing Square");
      cache[num] = squares(num);
    }
    console.log("Returning Square");
    return cache[num];
  };
}
const msquare = memoizedSquare();
console.log(msquare(500));
console.log(msquare(500));

function memoizeCallBack(callbackfn) {
  let cache = {};
  return function inner(...args) {
    const key = args.toString;
    if (!(key in cache)) {
      console.log("Computing");
      cache[key] = callbackfn(...args);
    }
    console.log("Returning");
    return cache[key];
  };
}
const memoizedAdd = memoizeCallBack(add);
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
const memoizedSq = memoizeCallBack(squares);
console.log(memoizedSq(500));
console.log(memoizedSq(500));
