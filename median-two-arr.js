// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays.The overall run time complexity should be O(log(m + n)).

// You may assume nums1 and nums2 cannot be both empty.

var findMedianSortedArrays = function (nums1, nums2) {
    let newArr = nums1.concat(nums2);
    let sorted = newArr.sort((a, b) => a - b);
    if (sorted.length % 2 !== 0) {
        return sorted[Math.ceil((sorted.length / 2) - 1)]
    } else if (sorted.length % 2 === 0) {
        let left = sorted[Math.floor((sorted.length / 2) - 1)];
        let right = sorted[Math.ceil((sorted.length / 2))];
        let median = (left + right) / 2.0;
        return median
    }
};