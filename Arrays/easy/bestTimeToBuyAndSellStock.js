//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/1640842905/

function maxProfit(prices) {
  let buy = prices[0]
  let maxProfit = 0

  for (let i = 0; i<prices.length; i++) {
    if (prices[i] < buy) buy = prices[i]
    if (prices[i] - buy > maxProfit) maxProfit = prices[i] - buy 
  }
  return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))


/*
Time Complexity: O(n) – single pass over the input array.
Space Complexity: O(1) – uses only fixed extra space.
*/