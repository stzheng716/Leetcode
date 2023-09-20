/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    let start = 0;
    let end = matrix[0].length - 1;

    let top = 0;
    let bottom = matrix.length - 1;

    while(top <= bottom) {
        const mid = Math.floor((top + bottom)/ 2)
        if(target > matrix[mid][end]) {
            top++;
        } else if (target < matrix[mid][start]){
            bottom--;
        } else {
            break;
        }
    }
    
    if(top > bottom) return false;

    tarRow = Math.floor((top + bottom)/ 2)
    let l = 0;
    let r = matrix[0].length - 1;

    while(l <= r) {
        const mid = Math.floor((l + r)/ 2);
        if(matrix[tarRow][mid] < target) {
            l++;
        } else if(matrix[tarRow][mid] > target){ 
            r--;
        } else {
            return true;
        }
    }

    return false;
};

//this problem will need binary search

//init start = 0;
//init end = matrix[0].length - 1;

//init top = 0;
//bottom = matrix.length - 1

//while top < bottom
    //middle = math.floor(top + bottom)/ 2
    //if(matrix[middle][0] > target && matrix[middle][end] < target)
        //continue
    //else if(matrix[middle][0] > target)
        //bottom - 1
    //else if (matrix[middle][end] < target)
        //top + 1

//if !top < bottom return false;


//tarRow = middle = math.floor(top + bottom)/ 2

//while start < end
    //middle = (start + end) / 2

    //if tarRow[middle] < target 
        //start + 1
    //else if tarRow[middle] > target
        //end - 1
    //else 
        //return true

//return false;
