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

