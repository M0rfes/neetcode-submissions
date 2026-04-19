class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            "{":"}",
            "[":"]",
            "(":")"
        };

        const stack = [];
        const ss = s.split("");
        while(ss.length) {
            const current = ss.shift();
            const isOpening = Boolean(map[current]);
            if(isOpening){
                const closing = map[current];                
                stack.push(closing)
            } else {
                const closing = stack.pop();
                if(current !== closing){
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
