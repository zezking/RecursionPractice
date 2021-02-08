let profit = 0;
const maxProfits = (arr) => {
  if (arr.length === 0) {
    return "no stock market price";
  } else if (profit === 0 && arr.length === 1) {
    return -1;
  } else if (arr.length === 1) {
    return profit;
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[0] > profit) {
        profit = arr[i] - arr[0];
      }
    }
  }
  arr.shift();
  return maxProfits(arr);
};

let test1 = [45, 24, 23, 22, 21, 20, 10];
let test2 = [];

console.log(maxProfits(test1));
