class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = '';
        for(const str of strs) {
            const len = str.length;
            result += `${len};${str}`
        }
        return result;
    }   

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(input) {
        /**
         * @type string
         */
        let str = input;
        console.log(str)
        const res = []
        while(str.length){
            const marker = str.indexOf(";")
            const len = str.slice(0,marker);
            if(Number.isNaN(+len)) {
                throw new Error("invalied string");
            }
            const s = str.slice(marker+1,+len+marker+1)
            res.push(s);
            str = str.slice(+len+marker+1)
        }
        return res;

    }
}
