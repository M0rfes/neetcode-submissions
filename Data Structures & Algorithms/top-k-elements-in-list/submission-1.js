class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();

        for(const num of nums){
            const c = 1 + (count.get(num)??0);
            count.set(num,c)
        }
        const frequency = new Array(nums.length+1).fill(0).map(()=>[])
        for(const [k,v] of count) {
            frequency[v].push(k);
        }
        
        const res = [];
            console.log(k,frequency.length-1)
    
        for(let i = frequency.length-1; i>= 0;i--) {
            if(res.length === k) {
                break;
            } else {
                res.push(...frequency[i])
            }
        }
        return res;
    }
}
