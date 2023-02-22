/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums, target) { // O(n^2))
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= i; j++) {
            const firstEl = nums[i];
            const nextEl = nums[i === j ? j + 1 : j];

            if ((firstEl + nextEl) === target) {
                return [nums.indexOf(firstEl), nums.lastIndexOf(nextEl)];
            }
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) { // (O^n)
    let disct = {};
    for (let i = 0; i < nums.length; i++) {
        let rest = target - nums[i];
        if (disct[rest] || disct[rest] === 0) {
            return [disct[rest], i];
        }
        disct[nums[i]] = i;

    }
};
