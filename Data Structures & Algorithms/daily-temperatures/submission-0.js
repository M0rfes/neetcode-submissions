class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];
        for(let i = 0; i<temperatures.length;i++) {
            const t = temperatures[i];
            while(stack.length && t > stack.at(-1).temp) {
                const {index} = stack.pop();
                res[index] = i - index;
            }
            stack.push({index:i,temp:t})
        }
        return res;
    }
}
