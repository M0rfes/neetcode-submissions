class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const str of strs) {
            const key = new Array(26).fill(0);

            for(const char of str) {
                key[char.charCodeAt(0) - 'a'.charCodeAt(0)]+=1;
            }
            const k = key.join('|');

            const val  = map.get(k) ?? [];
            val.push(str);
            map.set(k,val);
        }
        return Array.from(map.values());
    }
}
