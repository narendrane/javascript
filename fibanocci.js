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
