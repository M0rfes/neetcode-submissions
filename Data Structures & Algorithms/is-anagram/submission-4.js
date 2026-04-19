class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }
        const map_s = new Map();
        const map_t = new Map();

        for(let i = 0; i<s.length; i++){
            if(map_s.has(s[i])) {
                const count = map_s.get(s[i]);
                map_s.set(s[i],count+1)
            } else {
                map_s.set(s[i],1)
            }

            if(map_t.has(t[i])) {
                const count = map_t.get(t[i]);
                map_t.set(t[i],count+1)
            } else {
                map_t.set(t[i],1)
            }
        }

        if(map_s.size !== map_t.size) {
            return false;
        }

        for(const [key,val] of map_s) {            
            if(map_t.get(key) !== val) {
                return false
            }
        }
        return true
    }
}
