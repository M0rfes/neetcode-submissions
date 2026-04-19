func isValidSudoku(board [][]byte) bool {
    rows := make(map[int]map[byte]bool, 9)
    cols := make(map[int]map[byte]bool, 9)
    squares := make(map[string]map[byte]bool, 9)

    for i := 0; i < 9; i++ {
        rows[i] = make(map[byte]bool)
        cols[i] = make(map[byte]bool)
    }


    for r := 0; r<3; r++ {
        for c:=0; c<3; c++ {
    squares[fmt.Sprintf("%d-%d",r,c)] = make(map[byte]bool)
        }
    }

    for r := 0; r<9; r++ {
        for c := 0; c<9; c++ {
            value := board[r][c]
            if value == '.' {
                continue
            }
            if rows[r][value] ||
                cols[c][value] ||
                squares[fmt.Sprintf("%d-%d",r/3,c/3)][value] {
                    return false
                }
            
            rows[r][value] = true
            
            cols[c][value] = true
            
            squares[fmt.Sprintf("%d-%d",r/3,c/3)][value] = true

        }
    }
    return true
}
