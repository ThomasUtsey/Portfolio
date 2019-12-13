function addTwoDigits(n) {
  //````````````````````````````  using builtins   ````````````````````````
  // let sum = n
  //         .toString()
  //         .split('')
  //         .reduce((a,b)=> a =parseInt(a) + parseInt(b))
  //```````````````````````````` using forLoop ``````````````````````````````
  let sum = 0;
  let str = n + "";

  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }

  return sum;
}

console.log(addTwoDigits(29));
