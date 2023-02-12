#!/usr/bin/env node

function fibs(n) {
  const fiboArray = [];
  if (n === 0) {
    return "Please enter a number greater than 0";
  }
  for (let i = 0; i < n; i += 1) {
    let fib = i;
    if (i > 1) {
      fib = fiboArray[i - 2] + fiboArray[i - 1];
    }
    fiboArray.push(fib);
  }

  return fiboArray;
}

console.log(fibs(3));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(5));
console.log(fibs(14));

function fibsRec(n) {
  if (n === 0) {
    return "Please enter a number greater than 0";
  } else if (n === 1) {
    const arr1 = [0];
    return arr1;
  } else if (n === 2) {
    const arr2 = fibsRec(n - 1);
    arr2.push(1);
    return arr2;
  }
  const fib = fibsRec(n - 1);
  console.log(n);
  const num1 = fib[n - 2];
  const num2 = fib[n - 3];
  fib.push(num1 + num2);
  console.log(fib);
  return fib;
}

console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(5));
console.log(fibsRec(8));
