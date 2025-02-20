
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.
// Binary search

const searchV2 = function(nums, target) {
    let loPointer = 0;
    let hiPointer = nums.length - 1;

    while (loPointer < hiPointer){
        let mid = loPointer  + Math.floor((hiPointer - loPointer + 1) / 2);

        if (target < nums[mid]) {
            hiPointer = mid - 1;
        } else {
            loPointer = mid; 
        }
    }
     return  nums[loPointer]==target?loPointer:-1;
};




// Sequential search
const search = function(nums, target) {
    for (let n = 0; n < nums.length; n++){
        if (nums[n] === target) return n
    }
    return -1
};

