// Ques 1: Find the number of digits in a given Number.
/* number. = 7899   => 9 9 8 7 ,  count = 4*/

function countNum(n) {
  let count = 0;
  while (n != 0) {
    /* let rem = n % 10 */
    /* console.log(rem) */
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

// Ques 2: Reverse a given number. if the number has trailing zeros the zeros will not be considered.

// input: 45300
// output : 354

function reverse(n) {
  let revNum = 0;
  while (n != 0) {
    let rem = n % 10;
    revNum = revNum * 10 + rem;
    n = Math.floor(n / 10);
  }
  console.log(revNum);
}

// Ques 3: Palindrome Number

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Approach 1

function palindrome(n) {
  let palinNum = +n.toString().split("").reverse().join("");
  if (palinNum === n) {
    return true;
  } else {
    return false;
  }
}

// Approach 2
function palindrome(n) {
  if (n < 0) return false;

  let temp = n;
  let revNum = 0;
  while (n != 0) {
    let rem = n % 10;
    revNum = revNum * 10 + rem;
    n = Math.floor(n / 10);
  }
  if (temp === revNum) {
    return true;
  } else return false;
}

console.log(palindrome(121));
