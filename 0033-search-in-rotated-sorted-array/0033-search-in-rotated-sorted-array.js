/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0; 
    let r = nums.length - 1;

    while (l <= r) {//[5,1,3] t = 3
        let m = Math.floor((l + r)/ 2) //1(1)
        if(nums[m] === target) {
            return m;
        }

        if(nums[m] >= nums[l]) { //1 > 3
            if(target > nums[m] || target < nums[l]) { 
                l = m + 1
            } else {
                r = m - 1
            }
        } else {
            if(nums[r] < target || target < nums[m]) { //5 > 3
                r = m - 1
            } else {
                l = m + 1
            }
        }

    }

    return -1
};

//init a left
//init a right

//while l <= r
    //cal middle l + r / 2
    //if middle === target
        //return middle
    //if middle > target
        //if left >= target
            //l = m + 1
        //else
            //r = m - 1
    //if middle < target
        //if left >= target
            //r = m - 1
        //else
            //l = m + 1

//return -1