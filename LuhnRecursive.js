const luhnRecursive = (a) => {
  a = a
    .toString()
    .split("")
    .map((a) => Number(a))
    .reverse();

  let checkDig = a[0];
  // let sumOfOddDights = 0;
  // for (i = 0; i < a.length; a++) {
  //   if((i+1))
  // }
  // if (sum%10!==0) {
  //   return false
  // }
};

let creditNum = 4520340060005413;
console.log(luhnRecursive(creditNum));
