

/**
 * The Approach We are using here is 
 * 
 * --> Will travel through the array and maintain the min val in the array to get max profit 
 *  for this will define 2 variable which is min and max profit
 * min = array first index maxProfit as zero 
 * will start the array frim index 1 becuase you only buy and sell the stock in diff day so you cant buy and sell stock in one day
 */


function maxProfit (prices) {

    let min = prices[0]
    let maxProfit = 0

    for (let i = 1 ; i < prices.length ; i ++){
        if((prices[i]- min) >  maxProfit){
            maxProfit = prices[i]- min
        }
        if(prices[i] < min){
            min = prices[i]
        }
    }
   return maxProfit
}

let prices = [7,1,5,3,6,4]

console.log("Max Profit is ->",maxProfit(prices))