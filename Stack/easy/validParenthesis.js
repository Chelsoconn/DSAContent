//https://leetcode.com/problems/valid-parentheses/description/


var isValid = function(s) {
    const arr = []
    const obj = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    for (let i of s) {
      if (i === '(' || i === '[' || i === '{') {
        arr.push(i)
      } else {
        if (arr.pop() !== obj[i]) {
            return false
        }
      }
    }

    return arr.length === 0
};


/*
⏱Time
O(n)
Space
O(n)
*/