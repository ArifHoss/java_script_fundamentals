
function sumCheck(n){
  return (((n&(n-1))!=0) && n!=0);
}

console.log(sumCheck(10));


//


function isSumOfConsecutiveNumbers(n){
  if((n&(n-1))!=0 && n!=0){
    return true;
  }else{
    return false;
  }

}


console.log(isSumOfConsecutiveNumbers(0))

//
// Consecutive Sum Check
// Source: Edabit
// Published by Mubashir Hassan in JavaScript
// bit_operations, logic, math, numbers, validation
// Create a function that takes a number n as an argument and checks whether the given
// number can be expressed as a sum of two or more consecutive positive numbers.
//   Examples
// consecutiveSum(9) ➞ true
// // 9 can be expressed as a sum of (2 + 3 + 4) or (4 + 5).
// consecutiveSum(10) ➞ true
// // 10 can be expressed as a sum of 1 + 2 + 3 + 4.
// consecutiveSum(64) ➞ false
// Notes
// N/A
