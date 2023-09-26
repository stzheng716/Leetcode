/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    let slow = 0;
    let fast = 0;

    while(true){
        slow = nums[slow]
        fast = nums[nums[fast]]
        if(slow === fast) {
            break;
        }
    }

    let slow2 = 0;

    while(true){
        slow = nums[slow]
        slow2 = nums[slow2]
        if(slow2 === slow){
            return slow
        }
    }
    
};

//use brute force method to solve this by running two for loops