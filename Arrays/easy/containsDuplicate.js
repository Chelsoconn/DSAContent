//https://leetcode.com/problems/contains-duplicate/

//Brute Force (Beat 5%)

var containsDuplicate = function(nums) {
  let obj = {}
  nums.forEach(num => {
    (obj[num]) ? obj[num] += 1 : obj[num] = 1
  })
  return Object.values(obj).some(num => num > 1)
};

containsDuplicate([1,2,3,1])