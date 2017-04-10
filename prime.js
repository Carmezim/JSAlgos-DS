const isPrime = (n) => {
  let divisor = 2;

  while (n > divisor) {
    if(n % divisor === 0) {
      return false;
    }
    else {
      divisor++;
    }
  }
  return true;
}
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(51));
console.log(isPrime(73));
console.log(isPrime(45));
