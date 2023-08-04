/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const numFreq = {};
    let mostFreqVal = 0;
    let mostCommonNum = 0;

    for (let num of nums) {
        numFreq[num] = (numFreq[num] || 0) + 1
        mostCommonNum = numFreq[num] > mostFreqVal ? num : mostCommonNum
        mostFreqVal = Math.max(mostFreqVal, numFreq[num])
    }


    return mostCommonNum;
};

//use a freq counter
//init a numFreq = {} 
//mostFreqVal
//mostCommonNum;

//for num of nums
    //numFreq[num] = (numFreq[num] || 0) + 1

//for num of numFreq
    //if numFreq[num] > mostFreqVal
        //mostFreqVal = numFreq[num]
        //mostCommonNum = num

//return mostCommonNum