//https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
  const seen = new Map()
  
  for (let i = 0; i<nums.length; i++) {
    const diff = target-nums[i] 
    if (seen.has(diff)) return [seen.get(diff), i]
    seen.set(nums[i], i)
  } 
};

/*
Time Complexity: O(n) — optimal
Space Complexity: O(n) — expect
*/