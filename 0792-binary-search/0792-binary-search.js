/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) { 

    let left = 0;//0
    let right = nums.length - 1;

    while(left <= right) {
        const middle = Math.floor((right+left)/2);
        const middleNum = nums[middle]

        if(middleNum === target) {
            return middle;
        } else if(middleNum < target) {
            left++;
        } else {
            right--;
        }
    }

    return -1;
};

//input =  nums: number[] and target: number
//output = idx: number or -1 if not found

//constraint O(log n)

//init left = 0;
//init right = nums.length - 1
//

//while loop (left <= right)
    //const middle = Math.floor((left+right)/2)
    //if(middle === target) 
        //return middle
    
    //if(middle < target)
        //left++

    //if(middle > target)
        //right--;

//return -1