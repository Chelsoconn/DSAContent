//https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    const set = new Set()
    let maxLength = 0
    let left = 0 

    for (let right = 0; right < s.length; right ++) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left ++ 
        }

        set.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
};


/*
Time
O(n)
Space
O(k) → O(n) in worst case
*/

