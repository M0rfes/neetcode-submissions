func isPalindrome(s string) bool {
    cleaned := normalize(s)
    l,r := 0,len(cleaned)-1

    for l<=r {
        if cleaned[l] != cleaned[r] {
            return false
        }
        l++
        r--
    }
    return true

}

func normalize(s string) string {
    re := regexp.MustCompile(`[^a-zA-Z0-9]`)
    cleaned := re.ReplaceAllString(s, "")
    return strings.ToLower(cleaned)
}
