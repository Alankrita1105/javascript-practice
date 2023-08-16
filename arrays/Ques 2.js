//intersection of arrays
//input [1,2,2,3] input 2=[2,2]
//output [2]

var intersection = function(nums1, nums2) {
    let set = new Set(nums1)
    let result = new Set()
    for(let i=0; i<nums2.length; i++) {
        if(set.has(nums2[i])) result.add(nums2[i])
    }
    return Array.from(result)
};