/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let start = 0;
    let end = 1;
    let maxValue = 0;

    while(end <= prices.length - 1) {
        if(prices[start] < prices[end]) {
            const profit = prices[end] - prices[start]
            maxValue = Math.max(maxValue, profit)
            end++;
        } else {
            start = end;
            end = start + 1;
        }
    }

    return maxValue;
}

//init a start = 0
//init a end = 1
//init max value

//while loop end < prices.length - 1
    //if price[start] < price[end]
        // price start
        //max value = math.max(maxvalue, )
        //end++;
    //else
        //start = end
        //end = start + 1 

//return max value