class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let result = 0;
        for(const n of set){
            if(set.has(n-1)) {
                continue;
            }
            let length = 1;
            while(set.has(n+length)) {
                length++;
            }
            result = Math.max(result,length);
        }
        return result
    }
}
