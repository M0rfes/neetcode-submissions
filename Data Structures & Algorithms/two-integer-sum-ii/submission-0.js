class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let start = 0;
        let end = numbers.length - 1;

        while(start<=end) {
            const num = numbers[start] + numbers[end];
            if(num === target) {
                return [start+1,end+1];
            }
            if(num > target) {
                end--;
            }
            if(num<target) {
                start++;
            }
        }
        return [start+1,end+1]
    }
}
