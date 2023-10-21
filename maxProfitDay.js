/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  if (!prices.length) return 0;

  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    minPrice = Math.min(minPrice, currentPrice);
    const currentProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);
  }

  return maxProfit;
};
