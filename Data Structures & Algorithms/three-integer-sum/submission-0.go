func threeSum(nums []int) [][]int {
    res := [][]int{}
    sort.Ints(nums)

    for i := 0; i < len(nums); i++ {
        a := nums[i]
        if i > 0 && a == nums[i-1] {
            continue // skip duplicates
        }

        start, end := i+1, len(nums)-1
        for start < end {
            sum := a + nums[start] + nums[end]
            if sum > 0 {
                end--
            } else if sum < 0 {
                start++
            } else {
                res = append(res, []int{a, nums[start], nums[end]})
                start++
                // Skip duplicates for the second number
                for start < end && nums[start] == nums[start-1] {
                    start++
                }
            }
        }
    }
    return res
}
