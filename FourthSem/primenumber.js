// function range(start, end) {
//     const primes = [];
  
//     for (let num = start; num <= end; num++) {
//       let isPrime = true;
  
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
  
//       if (isPrime && num > 1) {
//         primes.push(num);
//       }
//     }
  
//     return primes;
//   }
  
//   const primeNumbers = range(1, 100);
//   console.log("Prime numbers between 1 and 100:", primeNumbers);
//   wow
function isPrime(num){
  if(num<=1){
    return false;
  }
  for (let i = 2; i<=Math.sqrt(num);i++){
    if(num%i == 0){
      return false;
    }
  }
  return true;
}
function displayPrime(start,end){
  for(let i = start; i<=end; i++){
    if(isPrime(i)){
      console.log(i);
    }
  }
}
displayPrime(1,100);
