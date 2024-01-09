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
return k;
*/
  const k = nums.filter((num) => num !== val).length;
  return k;
};
console.log("removeElement-", removeElement([3, 2, 2, 3], 3));
