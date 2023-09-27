/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    nums.sort((a, b) => a - b)
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let currNum = nums[i]
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            sum = currNum + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                right--;
                left++;
                while (nums[left] === nums[left - 1] && left < right){
                    left++;
                }

            }
            if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--;
            }
        }
    }

    return res;
};

//input: nums: numbers[]
//output: numbers[][]

//nums.sort((a,b) => a - b) 

//init a new array as res

//for loop nums
    //init left
    //init right
    //while left < right
        //sum = i, left, right
        //if(left === i || right === i)
            //continue
        //if(sum === 0)
            //res.push[nums[i], nums[left], nums[right]]
        //if(sum < 0)
            //left++
        //if(sum > 0)
            //right--

//return res