// Write a function in JavaScript that takes an array of integers and returns an object. The object should have each unique integer from the array as keys, and their frequency (the number of times they appear in the array) as values.


const numbers = [3, 5, 3, 8, 9, 5, 5, 7, 3, 9, 10];


// expected output:
// {  
//     3: 3,
//     5: 3,
//     9: 2
//   }


function frequencyCounter(numbers) {
    const frequency = {};
  
    for (const num of numbers) {
      frequency[num] = (frequency[num] || 0) + 1;
    }
  
    const result = {};
    const keys = [];
    
    for (const key in frequency) {
        if (frequency[key] > 1) {
            keys.push(key);
        }
    }
    keys.sort((a, b) => a - b);

    for (const key of keys) {
        result[key] = frequency[key];
    }
  
    return result;
  }
  
  console.log(frequencyCounter(numbers));