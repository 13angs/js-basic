let price = [1, 2, 3, 5, 10, 20, 30];

const val = 15;

const result = price.filter(item => val > item);

result
const len = result.length;

len

const prevInd = len-1;

const ind = price.indexOf(result[prevInd]);

const nextInd = len;

price.splice(nextInd, 0, val);

price
