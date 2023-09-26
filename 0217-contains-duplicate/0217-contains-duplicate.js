/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let count = {};

    for(let num of nums) {
        if(num in count) {
            return true;
        }
        count[num] = (count[num] || 0) + 1
    }

    return false;
};

//given a nums array with ints
//return true if a number appears twice

//use a object

//loop through the array
    //if(num in object)
        //return true
    //set number in the object

//return false;