/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

    const numSet = new Set(nums);
    let longest = 0;
    for (let num of nums) {
        let count = 1;
        if (!numSet.has(num - 1)) {
            let currNum = num
            while (numSet.has(currNum + 1)) {
                count++;
                currNum++;
            }
        }
        longest = Math.max(longest, count);
    }

    return longest
};

//init a set and put nums inside the set
//init longest = 0;
//for loop through nums
    //init count
    //while loop has num + 1
        //count += 1
    //longest = Math.max(longest, count)

//return longest