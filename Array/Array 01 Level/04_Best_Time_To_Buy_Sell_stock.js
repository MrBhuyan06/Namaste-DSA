/**
 * The Approach We are using here is
 *
 * --> Will travel through the array and maintain the min val in the array to get max profit
 *  for this will define 2 variable which is min and max profit
 * min = array first index maxProfit as zero
 * will start the array frim index 1 becuase you only buy and sell the stock in diff day so you cant buy and sell stock in one day
 */

// 1.Brute Froce Approach

/**
 *
 * in Brute Force Approach what are we doing is 2 nested loop will one value in outer araay and compaare with inner for generate maxProfite
 */

function maxProfitBrute(arr) {
  let maxProfite = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > maxProfite) {
        maxProfite = arr[j] - arr[i];
      }
    }
  }
  return maxProfite;
}
console.log("Brute Force Method", maxProfitBrute([7, 1, 5, 3, 6, 4]));

function maxProfit(prices) {
  let minSellingPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - minSellingPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    if (prices[i] < minSellingPrice) {
      minSellingPrice = prices[i];
    }
  }
  return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];

console.log("Max Profit is ->", maxProfit(prices));
