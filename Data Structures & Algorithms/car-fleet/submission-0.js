class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p,i) => ({pos:p,speed:speed[i]}));
        pairs.sort((a,b) => a.pos - b.pos);
        const stack = [];

        for(let i = pairs.length - 1; i >= 0; i--) {
            const {pos,speed} = pairs[i];
            stack.push((target - pos )/ speed);
            if(stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
                stack.pop()
            }
        }
        return stack.length
    }
}
