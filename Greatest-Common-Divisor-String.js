// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

function gcdOfStrings(str1, str2) {
    // Find the minimum length of str1 and str2
    const leng = Math.min(str1.length, str2.length);
    
    // Check if concatenating str1 and str2 is equal to concatenating str2 and str1
    if (str1 + str2 !== str2 + str1) {
        return ''; // Return an empty string if the strings don't have a common divisor
    }
    
    // Iterate from l to 1
    for (let i = leng; i > 0; i--) {
        // Check if both str1 and str2 are divisible by i without a remainder
        if (!(str1.length % i || str2.length % i)) {
            return str1.substring(0, i); // Return the greatest common divisor substring
        }
    }
}

console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"))