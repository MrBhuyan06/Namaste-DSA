// Find the factorila of a given number

// 5! == 5*4*3*2*1 = 120

function factorial(num) {
  if (num == 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

let num = 5;

console.log("Factorial Of a Given Number is ", factorial(num));
