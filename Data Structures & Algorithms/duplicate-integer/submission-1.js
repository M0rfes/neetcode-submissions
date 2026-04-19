class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Map();

        for(const num of nums) {
            if(seen.has(num)) {
                return true
            }
            seen.set(num,true)
        }

        return false
    }
}
