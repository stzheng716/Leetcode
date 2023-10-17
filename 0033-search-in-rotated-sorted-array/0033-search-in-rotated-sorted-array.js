/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while(l <= r) {
        let m = Math.floor((l + r) / 2);

        if(nums[m] === target) {
            return m;
        }

        if(nums[m] >= nums[l]) {
            if(nums[m] < target || target < nums[l]) {
                l = m + 1
            } else {
                r = m - 1
            }
        } else {
            if(nums[m] > target || target > nums[r]) {
                r = m - 1
            } else {
                l = m + 1
            }
        }
    }

    return -1
};

//init l = 0;
//init r = nums.length - 1;

//while l <= r
    //mid = l + r / 2

    //if nums[mid] === target
        //return mid
    
    //if nums[mid] <= nums[l]
        //if nums[mid] < target || target < nums[left] 
            //l = m + 1
        //else  
            //r = m - 1
    //else
        //if nums[mid] > target || target > nums[right] 
            //r = m - 1
        //else  
            //l = m + 1

//return -1