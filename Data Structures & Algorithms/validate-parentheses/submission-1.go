func isValid(s string) bool {
    stack := make([]rune,0)
    closeToOpen := map[rune]rune{')':'(','}':'{',']':'['}

    for _,c := range s {
        if open, ok := closeToOpen[c]; ok {
            if len(stack) == 0 {
                return false
            }
            top := stack[0]
            stack = stack[1:]
            if top != open {
                return false
            }
        } else {
            stack = append([]rune{c},stack...)
        }
    }
    return len(stack) == 0
}
