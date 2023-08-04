/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const outterArray = [];

    if (numRows >= 2) {
        outterArray.push([1])
        outterArray.push([1, 1])
    } else if (numRows <= 1) {
        outterArray.push([1])
    }

    
    for (let i = 2; i < numRows; i++) {
        const subArray = [];
        subArray.push(1)
        for (let j = 0; j < outterArray[i - 1].length - 1; j++) {
            subArray.push(outterArray[i - 1][j] + outterArray[i - 1][j + 1])
        }
        subArray.push(1)
        outterArray.push(subArray)
    }

    return outterArray;
};

//init a outterarray

//if numRows > 2
    //newarray push [1]
    //newarray push [1, 1]
//if numRows <= 1
    //newarray push [1]

//for loop i = 2, i < numRows
    //init subarray
    //subarray push 1
    //for loop j = 0; j < outterarray[i - 1].length - 1
        //subarray.push(outarray[i - 1][j] + outarray[i - 1][j + 1])
    //subarray push 1

//return outterarray