class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Map();
        const cols = new Map();
        const squs = new Map();

        for(let i=0;i<= board.length-1;i++) {
            const row = board[i];
            for(let j=0; j<=row.length-1; j++){
                if(row[j] === '.') {
                    continue;
                }
                const val = row[j];
                const r = rows.get(i) ?? [];
                const c = cols.get(j) ?? [];
                const sKey = [parseInt(i/3),parseInt(j/3)].join(",")
                const s = squs.get(sKey) ?? []

                if(r.includes(val) || c.includes(val) || s.includes(val)) {
                    return false
                }
                r.push(val);
                c.push(val);
                s.push(val);
                rows.set(i,r);
                cols.set(j,c);
                squs.set(sKey,s);
            }
        }
        return true;
    }
}
