func isSubsequence(s string, t string) bool {
	lenT := len(t)
	lenS := len(s)
	if lenS == 0  {
		return true
	}
	i := 0
	j := 0

	for j < lenT && i < lenS {
		if s[i] == t[j] {
			i++
			j++
		} else {
			j++
		}
	}
	return i == lenS
}
