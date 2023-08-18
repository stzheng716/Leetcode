/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(left < right) {
        let sum = numbers[left] + numbers[right]

        if(sum === target) {
            return [left + 1, right + 1]
        }

        if(sum < target) {
            left++;
        }

        if(sum > target) {
            right--;
        }
    }

    return [-1,-1]
};

//two sums

//input: numbers: number[], target: number
//output: number[], with idx of the two numbers that add up to target but is 1 indexed

//use two pointers
//init a start = 1
//init a end = numbers.length

//while loop: start < end
    //init sum = numbers[start] + numbers[end]
    //if(sum === target) 
        //return [start, end]

    //if(sum < target)
        //start++;
    
    //if(sum > target)
        //end--;

    