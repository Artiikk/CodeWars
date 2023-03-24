function intersect(nums1, nums2) {
  const resultArr = [];

  for (let i = 0; i < nums2.length; i++) {
    let index = nums1.indexOf(nums2[i]);

    if (index >= 0) {
      resultArr.push(nums2[i]);
      nums1.splice(index, 1);
    }
  }

  return resultArr;
}

console.log(intersect([4,9,5], [9,4,9,8,4])); // [9, 4]

