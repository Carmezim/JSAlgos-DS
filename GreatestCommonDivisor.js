const greatestCommonDivisor = (a, b) => {
  if(b == 0)
    return a;
  else
    return greatestCommonDivisor(b, a % b);
}
//console.log(greatestCommonDivisor(512, 32));



// lame greatestCommonDivisor
const lameGreatestCommonDivisor = (a, b) => {
  let divisor = 2;
  let greatestDivisor = 1;

  if (a < 2 || b < 2) {
    return 1;
  }
  
  while (a >= divisor && b >= divisor) {
    if(a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
}

console.log(lameGreatestCommonDivisor(512, 32));