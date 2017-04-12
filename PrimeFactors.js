// O(n)
//
const primeFactors = (n) => {
  const factors = [];
  let divisor = 2;

  while(n > 2) {
    // if number is divisible
    if (n % divisor === 0) {
      // add prime factors
      factors.push(divisor);
      // keepts dividing to finding next factors until reaches 2  
      n = n / divisor;
    }
    else {
      // can be optmized by increasing divisor by 2 when divisor === 3
      divisor++;
    }
  }
  return factors;
}

console.log(primeFactors(125));
console.log(primeFactors(81));
