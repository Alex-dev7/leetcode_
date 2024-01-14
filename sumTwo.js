// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const nums =  [2,7,11,15];


var twoSum = function(nums, target) {
    const sum = []
    for (i = 0; i < nums.length; i += 1){
        const firstIndex = i;
        for(j = 0 ; j < nums.length; j += 1){
            if(nums[firstIndex] + nums[j] === target && j !== firstIndex){
                sum.push(firstIndex, j)
                return sum
            }
        }
        console.log(i)
    }
};

console.log(twoSum(nums,9))