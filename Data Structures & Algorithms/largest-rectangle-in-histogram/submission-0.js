class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;
        const stack = [];
        for(let i=0; i<heights.length; i++) {
            const h = heights[i];
            let start = i;
            while(stack.length && stack.at(-1).height > h) {
                const {start:s,height} = stack.pop();
                max = Math.max(max, height * (i-s));
                start = s
            }
            stack.push({start,height:h});
        }
        for(const {start,height} of stack) {
            max = Math.max(max,height * ( heights.length - start));
        }
        return max
    }
}
