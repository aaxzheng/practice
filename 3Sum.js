// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.

var threeSum = function (nums) {
    let sorted = nums.sort((a, b) => a - b);
    let sums = [];
    for (let i = 0; i < nums.length; i++) {
        let a = i;
        let b = i + 1;
        let c = nums.length - 1;
        let check = false;
        while (c > b) {
            if (nums[0] === 0 && nums[c] === 0) {
                return [[0, 0, 0]];
            }
            if (nums[a] + nums[b] + nums[c] === 0) {
                sums.push([nums[a], nums[b], nums[c]]);
                b++;
            } else if (nums[a] + nums[b] + nums[c] < 0) {
                b++;
            } else if (nums[a] + nums[b] + nums[c] > 0) {
                c--;
            }
        }
    }
    let noDupes = sums.map(JSON.stringify).reverse().filter((itm, idx, arr) => arr.indexOf(itm, idx + 1) === -1).reverse().map(JSON.parse);
    //need to get a better system to avoid duplicates
    return noDupes;
};