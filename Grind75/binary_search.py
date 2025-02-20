# Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
# You must write an algorithm with O(log n) runtime complexity.Binary search

import math

def search(self, nums: List[int], target: int) -> int:
    hiP = 0
    loP = len(nums) - 1
    
    while loP < hiP:
        mid = loP + math.floor((hiP - loP + 1) / 2)
        
        if target < nums[mid]:
            hiP = mid - 1
        else:
            loP = mid
            
    return loP if nums[loP] == target else -1