func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }
    s_map := make(map[rune]int)
    t_map := make(map[rune]int)

    for _,value := range s {
        if s_map[value] > 0 {
            s_map[value]++
        } else {
            s_map[value] = 1
        }
    }

    for _,value := range t {
        if t_map[value] > 0 {
            t_map[value]++
        } else {
            t_map[value] = 1
        }
    }

    for key,value := range s_map {
        if t_map[key] != value {
            return false
        }
    }

    return true
}
