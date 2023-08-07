/**
 * @param {number[]} nums
 * @return {number}
 * 
 */

var pivotIndex = function (nums) { //[2,1,-1]
    let totalOfNums = 0;
    let leftSum = 0

    for (let num of nums) {
        totalOfNums += num
    }

    for (let i = 0; i < nums.length; i++) {
        rightSum = totalOfNums - nums[i] - leftSum

        if (leftSum === rightSum) { 
            return i
        }
        leftSum += nums[i]
    }

    return -1
};

//brute force method O(n^2)

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

    // let pivot = -1;

    // for (let i = 0; i < nums.length; i++) {
    //     let total = 0;

    //     for (let j = i + 1; j < nums.length; j++) {
    //         total += nums[j];
    //     }

    //     for (let k = 0; k < i; k++) {
    //         total -= nums[k];
    //     }

    //     if (total === 0) {
    //         pivot = i;
    //         break;
    //     }
    // }

    // return pivot;

