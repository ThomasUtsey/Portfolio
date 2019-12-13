const add = (a, b) => a + b;

const add2 = arguments => arguments.reduce((acc, b) => (acc = acc + b));

// const add2 = (...[a]) =>a.reduce((acc,b)=>acc = acc + b)

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2([1, 2, 3, 4, 5]));
console.log(add2([2, 3]));
