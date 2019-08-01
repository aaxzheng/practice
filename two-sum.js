// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let sum = target - nums[i];
        if (map[sum] >= 0) {
            return [map[sum], i];
        } else {
            map[nums[i]] = i;
        }
    }
};

console.log(twoSum([2,7,11,14],9));