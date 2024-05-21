var containsDuplicate = function(nums) {
  let set = new Set();
  
  for (let num of nums) {
     
      if (set.has(num)) {
          return true;
      }
  
      set.add(num);
  }
  
  return false;
};

console.log(containsDuplicate([2,14,18,22,22]))
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
