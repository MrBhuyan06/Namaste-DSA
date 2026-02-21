/**
 * 
 * Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
 */

// 1. Approach using 2 pointer

let reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    start++;
    end--;
  }
  return s;
};

let s = ["h", "e", "l", "l", "o"];

console.log("After reverse the given String", reverseString(s), s);

// 2. Approach using with using the pointer

let reverseStringNotPointer = function (s) {
  let halfLength = Math.floor(s.length / 2);

  for (let i = 0; i < halfLength; i++) {
    let temp = s[i];
    // s[i] = s[s.length - i - 1];
    // s[s.length - i - 1] = temp;
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
  }
  return s;
};

let s1 = ["h", "e", "l", "l", "o"];

console.log("After reverse the given String", reverseStringNotPointer(s1), s1);
