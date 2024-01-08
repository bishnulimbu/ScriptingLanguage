// let fact = 1;
// function factorial(num){
//   for(i = 1 ; i <= num ; i++){
//     fact *= i;
//   }
//   return fact;
// }
// console.log(factorial(5));
// console.log(factorial(10));
// console.log(factorial(100));
let fact = 1;
function factorial(num){
  for(i = num ; i > 0 ; i--){
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(100));
