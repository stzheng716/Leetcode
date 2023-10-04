/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if(map.has(diff)){
            return [map.get(diff), i]
        }
        map.set(nums[i], i)
    }

};

//[1,2,4,5,7] target = 7 => return [1,3]
//[1,2,3] target 4 => return [1,2]

//safe to assume I will always get a number in the array
//will there be negative numbers?
//what if nothing adds up to target what do i return?
//init a Map()
//use a for loop
    //get the different of each number
    //if(map has difference)
        //return the value difference and i
    //set nums[i] and i