// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    return binarySearch(nums, target, 0, nums.length -1)
};


function binarySearch(arr, target, left, right){

    if(left > right) return left

    const middle = Math.floor((left + right )/ 2)

    if(arr[middle] === target) return middle

    if(arr[middle] < target) {
        binarySearch(arr, target, middle + 1, right)
    }
    if(arr[middle] > target) {
        binarySearch(arr, target, left, middle - 1)
    }
}