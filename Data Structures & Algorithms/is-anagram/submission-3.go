func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }
    s_map := make(map[rune]int)
    t_map := make(map[rune]int)

    for _,value := range s {
        if _,ok := s_map[value]; ok {
            s_map[value]++
        } else {
            s_map[value] = 1
        }
    }

    for _,value := range t {
        if _,ok := t_map[value]; ok {
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
