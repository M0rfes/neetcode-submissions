func topKFrequent(nums []int, k int) []int {
    counts := make(map[int]int)
    freq := make([][]int, len(nums)+1)

    for _, num := range nums {
        counts[num]++
    }

    for num, count := range counts {
        freq[count] = append(freq[count],num)
    }

    res := []int{}

    for i := len(freq) -1; i>0; i-- {
        for _, num := range freq[i] {
            res = append(res, num)
            if len(res) == k {
                return res
            }
        }
    }
    return res
}
