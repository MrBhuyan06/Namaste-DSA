/**
 * 
 * Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
 */


let reverseString = function(s) {

    let len = s.length

    let halfLen = Math.floor(len/2)

    for(let i=0 ; i<halfLen ; i++){
        let temp = s[i]

        s[i] = s[s.length-1-i]
        s[s.length-1-i]=temp
    }
    
};

let s = ["h","e","l","l","o"]

console.log("After reverse the given String",reverseString(s),s)