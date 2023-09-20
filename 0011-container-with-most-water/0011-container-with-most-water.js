/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let l = 0;
    let r = height.length - 1;

    let maxAmount = 0;

    while(l <= r) {
        area = (r - l) * Math.min(height[l], height[r]);
        maxAmount = Math.max(area, maxAmount)
        if(height[l] <= height[r]){
            l++;
        } else {
            r--;
        }
    }

    return maxAmount;
};

//init a left and right pointer

//init maxAmount = 0

//while loop r < height.length
    //if right > left
        //left = right
    //else
        //product = Math.min(left height, right height) * (right - left)
        //maxAmount = Math.max(maxAmount, product)

    //right++

//return maxAmount