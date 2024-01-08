// function prime() {
//   for (i=2 ; i<=100; i++){
//     if(i % 2 === 0 ){
//       return i;
//     }
//     console.log(i);
//   }
// }
// console.log(prime());
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function findPrimesInRange(start, end) {
  let primes = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

const primesBetween1And100 = findPrimesInRange(1, 100);
console.log("Prime numbers between 1 and 100:", primesBetween1And100);
