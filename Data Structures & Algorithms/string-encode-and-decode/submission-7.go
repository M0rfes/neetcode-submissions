type Solution struct{}

func (s *Solution) Encode(strs []string) string {
    var result string
    for _,s := range strs {
        l := len(s)
        result = fmt.Sprintf("%s%d;%s",result,l,s)
    }
    return result
}

func (s *Solution) Decode(str string) []string {
   var result []string
    st := str
    for {
        if st == "" {
            break
        }
        semi := strings.Index(st,";")
        fmt.Println("semi: ",semi)
        if semi == -1 {
            break
        }
        l,err := strconv.Atoi(string(st[0:semi]))
        if err != nil {
            break
        }
        fmt.Println("len: ",l)
        extra := 0
        ll := l
        for {
            if ll < 10 {
                break
            }
            ll = ll/10
            extra++
        }
        fmt.Println("extra: ", extra)
        str := st[semi+1:l+2+extra]
        fmt.Println("str: ", str)
        st = st[semi+l+1:]
        fmt.Println("st: ",st)
        result = append(result,str)
    }
    return result
}
