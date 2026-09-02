func replaceElements(arr []int) []int {
	n := len(arr)
	ans := make([]int,n)
	rightMax := -1
	for j := n-1; j >= 0; j-- {
		ans[j] = rightMax

		if arr[j] > rightMax {
			rightMax = arr[j]
		}
	}

	return ans
}
