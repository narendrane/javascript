function removeDuplicates(nums) {
  const k = new Set(nums).size;
  return k;
}
console.log("removeDuplicates-", removeDuplicates([1, 1, 2]));
