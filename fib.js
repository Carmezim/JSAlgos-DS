const fib = (n) => {
  const fibo = [0, 1];

  if (n <= 2) return 1;

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
  }
  return fibo[n];
}
const fibbad = (n) => {
  if (n <= 1)
    return n;
  else
    return fibbad(n-1) + fibbad(n-2);
}  
console.log(fibbad(12));
