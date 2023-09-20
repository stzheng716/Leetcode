/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let [l, r] = [0, height.length-1];
    let [leftMax, rightMax] = [height[l], height[r]]
    let rain = 0;

    while(l < r) {
        if(leftMax < rightMax) {
            l++;
            leftMax = Math.max(leftMax, height[l]);
            rain += leftMax - height[l];
        } else {
            r--;
            rightMax = Math.max(rightMax, height[r]);
            rain += rightMax - height[r];
        }
    }

    return rain;
};