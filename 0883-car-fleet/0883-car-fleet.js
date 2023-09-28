/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const combined = position.map((p, i) => {
        return [p, speed[i]]
    }).sort((a,b) => a[0] - b[0])

    const stack = [];

    for(let i = combined.length - 1; i >= 0; i--) {
        let [p, s] = combined[i];

        stack.push((target - p)/ s)

        if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop()
        }
    }

    return stack.length
};