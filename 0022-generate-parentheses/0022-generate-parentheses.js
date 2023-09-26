/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    const stack = [];
    const res = [];

    function backtrack(open, close) {
        if(open === n && close === n) {
            res.push(stack.join(''))
            return;
        }

        if(open < n) {
            stack.push("(")
            backtrack(open + 1, close)
            stack.pop()
        }

        if(close < open) {
            stack.push(")")
            backtrack(open, close + 1)
            stack.pop()
        }
    }

    backtrack(0, 0)
    return res;
};

//use backtracking
//conditions 
// to add a open 
    //open < n
//to add a close 
    //close < open
    


//init a stack with a an array
//init a the result array 

//define a function takes in open and close
    
    //base case
    //if open === close === n
        //res.push(stack.join(""))
        //return
    
    //if(open < n)
        //stack.push("(")
        //backtrack(open + 1, close)
        //stack.pop()

    //if(close < open)
        //stack.push(")")
        //backtrack(open, close + 1)
        //stack.pop()

//backtrack(0, 0)

//return res