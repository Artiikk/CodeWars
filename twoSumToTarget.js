function twoSum (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (j = 0; j <= i; j++) {
            const firstEl = nums[i];
            const nextEl = nums[i === j ? j + 1 : j];

            if (firstEl + nextEl === target) {
                return [nums.indexOf(firstEl), nums.lastIndexOf(nextEl)];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
