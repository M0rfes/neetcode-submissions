func evalRPN(tokens []string) int {
    stack := make([]int,0)
    var a int
    var b int
    for _,c := range tokens {
        switch c {
            case "+":
                a = stack[len(stack)-1]
                b = stack[len(stack)-2]
                stack = stack[:len(stack)-2]
                stack = append(stack,b+a)
            case "-":
                a = stack[len(stack)-1]
                b = stack[len(stack)-2]
                stack = stack[:len(stack)-2]
                stack = append(stack,b-a)
            case "*":
                a = stack[len(stack)-1]
                b = stack[len(stack)-2]
                stack = stack[:len(stack)-2]
                stack = append(stack,b*a)
            case "/":
                a = stack[len(stack)-1]
                b = stack[len(stack)-2]
                stack = stack[:len(stack)-2]
                stack = append(stack,b/a)
            default:
                i, _ := strconv.Atoi(c)
                stack = append(stack,int(i))
        }
    }
    return stack[0]
}
