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
