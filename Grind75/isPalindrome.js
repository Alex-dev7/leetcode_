// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    const lowerS = s.toLowerCase() 
    let l = lowerS.length
    let seq = ''
    for (let i = 0; i < l; i++) {
        if(/[a-zA-Z0-9]/.test(lowerS[i])){
            seq += lowerS[i]
        }
    }
    const rev = seq.split('').reverse().join('')
    return seq === rev
};