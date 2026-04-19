class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false;
        }

        const sMap = new Map();

        for(const ss of s){
            if(sMap.has(ss)) {
                sMap.set(ss,sMap.get(ss)+1)
            } else {
                sMap.set(ss,1)
            }
        }

        const tMap = new Map();

        for(const tt of t){
            if(tMap.has(tt)) {
                tMap.set(tt,tMap.get(tt)+1)
            } else {
                tMap.set(tt,1)
            }
        }
        console.log(sMap,tMap);
        for(const [k,v] of sMap) {
            
            if(tMap.get(k) !== v) {
                return false
            }
        }

        return true
    }
}
