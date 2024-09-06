//  Fibonacci

function fibs(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      array.push(0);
    } else if (i == 1) {
      array.push(1);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }
  return array;
}

console.log(fibs(11));

function fibsRecursive(n) {
  // Check for base cases such as if n = 0, n = 1 and n = 2
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fib = fibsRecursive(n - 1);
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  return fib;
}

console.log(fibsRecursive(10));
