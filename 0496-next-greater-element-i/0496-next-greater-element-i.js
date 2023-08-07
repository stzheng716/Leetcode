/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

    const idxArr = [];//[2,0,3]
    const ans = [];

    console.log(idxArr)
    for (let num of nums1) {
        const idx = nums2.indexOf(num)
        idxArr.push(idx)
    }


    for (let idx of idxArr) {
        const currNum1 = nums2[idx];
        let greaterNum = -1
        for (let i = idx + 1; i < nums2.length; i++) {
            if (nums2[i] > currNum1 && nums2[i] > greaterNum) {
                greaterNum = nums2[i]
                break;
            }
        }

        ans.push(greaterNum)
    }

    return ans;
};

//input nums1 number[] and nums2 number[]
//output number[] w/ length of nums1

//init an index array
//init an ans array

//loop through nums1
    //push index .indexOf(nums)

//loop through index array
    //currNum1 = nums1[index]
    //greaterNum = -1
    //inner for loop nums2
        //if nums2Num > currNum
            //greaterNum = nums2Num
    //ans.push(greaterNum)

//return ans