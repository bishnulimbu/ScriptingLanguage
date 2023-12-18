function factorial(num) {
    if (num < 0) {
      return "Factorial is not defined for negative numbers.";
    } else if (num === 0 || num === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  // Testing the function with different numbers
  console.log("Factorial of 0:", factorial(0));
  console.log("Factorial of 5:", factorial(5));
  console.log("Factorial of 8:", factorial(8));
  console.log("Factorial of 10:", factorial(10));
  