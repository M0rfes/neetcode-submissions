class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        while(tokens.length) {
            const token = tokens.shift();
            switch(token) {
                case '+': {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a+b)
                    break;
                }
                case '-': {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a-b)
                    break;
                }
                case '*': {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a*b)
                    break;
                }
                case '/': {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push( Math.trunc(a/b))
                    break;
                }
                default: {
                    stack.push(parseInt(token));
                }
            }
        }
        return stack.pop()
    }
}
