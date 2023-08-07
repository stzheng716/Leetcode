/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {//[1,2,3,4]
    let results = [];//[24,12,8,6]
    let prefix = 1;
    let postfix = 1;//12
    for(let i = 0; i < nums.length; i++){
        results[i] = prefix;
        prefix *= nums[i];
    }
    for(let i = nums.length - 2; i >= 0; i--){
        postfix *= nums[i + 1];
        results[i] *= postfix;
    }
    return results;
};