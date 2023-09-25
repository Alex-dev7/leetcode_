// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

const mergeAlternately = function(word1, word2) {
    const length = word1.length > word2.length ? word1.length : word2.length
    let counter = 0
    const mergedArr = []

    while(counter < length){
        mergedArr.push(word1[counter])
        mergedArr.push(word2[counter])

        counter += 1
    }

    return mergedArr.join("")
};

console.log(mergeAlternately("axd", "edcsf"))

// option II
const mergeAlternately2 = function(word1, word2) {
    let result = '';
     for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
       if (i < word1.length) result += word1[i];
       if (i < word2.length) result += word2[i];
     }
     return result;
   };


// option III
   var mergeAlternately3 = function(word1, word2) {
    let i =  0 
    let res = ""
    while(i < Math.max(word1.length, word2.length)){
        if(word1[i]) res+=word1[i]
        if(word2[i]) res+=word2[i]

        i++
    }

    return res 
};