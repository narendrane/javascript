function linearSearch(arr, target) {
  arr.sort((a, b) => a - b);
  return arr.findIndex((item) => item === target) || -1;
}
console.log(linearSearch([-5, 2, 10, 4, 6], 9));
