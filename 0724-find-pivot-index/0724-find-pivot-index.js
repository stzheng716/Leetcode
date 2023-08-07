/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let pivot = -1;

    for (let i = 0; i < nums.length; i++) {
        let total = 0;

        for (let j = i + 1; j < nums.length; j++) {
            total += nums[j];
        }

        for (let k = 0; k < i; k++) {
            total -= nums[k];
        }

        if (total === 0) {
            pivot = i;
            break;
        }
    }

    return pivot;
};

//brute for method

//init a pivot index as -1

//for loop through the nums array
    //totalsum

    //for loop through right half
        //increment

    //for loop through left half
        //decrement

    //if total sum === 0
        //pivot index === i

//return pivot index