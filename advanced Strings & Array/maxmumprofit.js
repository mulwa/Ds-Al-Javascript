// Instructions
// Supposed we could access yesterday's prices for a certain stock as a chronological list.
// write a function that takes the list and return the highest profit possible from one purchase
// abd on sale of the stock yesterday

// For Example, a stock price list of [10,7,5,8,11,9] shows that the stock started at 10 and ended at 9
// our function should return 6 the maximum possible profit from buying when the price was 5 and selling when the price was 11

// NO "shorting" you must buy before you sell
console.log(maximumProfit([10,7,5,8,11,9]));

function maximumProfit(prices){
    profits = [0];
    for(let i = 0; i<prices.length; i++){ // O(n)
        for(let j = i+1; j<prices.length; j++){ // O(n/2)
            let profit = prices[j]-prices[i];
            profits.push(profit);            
        }
    }
    return Math.max(...profits); //O(n^2)

    // Time : O(n^2) + O(n^2) => O(2*n^2) => O(n^2)
    // space : O(n^2)
}
