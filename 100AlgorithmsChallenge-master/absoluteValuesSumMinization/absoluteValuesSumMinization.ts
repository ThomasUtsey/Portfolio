const absoluteValuesSumMinimization = a => {
  if (a.length < 1) return "The arrays must have a number";
  return a.length % 2 === 0 ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
};
console.log(absoluteValuesSumMinimization([]));
console.log(absoluteValuesSumMinimization([2]));
console.log(absoluteValuesSumMinimization([2, 4]));
console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
