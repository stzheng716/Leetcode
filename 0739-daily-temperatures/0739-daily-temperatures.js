/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

    const stack = [];
    const res = Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++){
        const currTemp = temperatures[i];
        while(stack.length > 0 && currTemp > stack[stack.length - 1].temp) {
            const {idx} = stack.pop()
            res[idx] = i - idx;
        }
        stack.push({temp: currTemp, idx: i})
    }

    return res;
};

//init a stack
//init a res array filled with zeros

//use a forloop
    //get the current temp
    //while loop stack.length greater than 0 and currtemp > last stack obj temp
        //get idx from poping the stack
        //res[idx] = i - idx
    //stack.push({temp: currTemp, idx: i})

//return res