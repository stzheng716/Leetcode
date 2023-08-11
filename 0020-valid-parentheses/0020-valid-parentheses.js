/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const brackets = { '(': ')', '{': '}', '[': ']' }
    const stack = [];

    for (let b of s) {
        if (b in brackets) {
            stack.push(b)
        } else {
            let open = stack.pop()
            if (brackets[open] !== b) {
                return false;
            }
        }
    }

    if (stack.length) {
        return false;
    }

    return true;
};

//input: s: string
//output: boolean if valid stirng

//valid string
    //each open has a close
    //each one must be closed by the matching open bracket
    //each open must a a close

//init an obj mapping the the brackets

//init a stack: string[]

//for loop through s
    //if b in obj
        //stack.push(b)
    //else
        //open = stack.pop()
        //if obj[open] !== b
            //return false;

//return true