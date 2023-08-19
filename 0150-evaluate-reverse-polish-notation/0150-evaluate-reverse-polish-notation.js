/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];

    const opSet = new Set(["+", "-", "*", "/"])
    let total = 0;

    for (let token of tokens) {

        if (token === "+") {
            stack.push(Number(stack.pop()) + Number(stack.pop()))
        } else if (token === "-") {
            let a = Number(stack.pop())
            let b = Number(stack.pop())
            stack.push(b - a)
        } else if (token === "*") {
            stack.push(Number(stack.pop()) * Number(stack.pop()))
        } else if (token === "/") {
            let a = Number(stack.pop())
            let b = Number(stack.pop())
            stack.push(Math.trunc(b / a))
        } else {
            stack.push(Number(token))
        }
    }
    return stack[0]
};