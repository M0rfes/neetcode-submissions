func twoSum(nums []int, target int) []int {
    store := make(map[int]int)

    for i,v := range nums {
        remaning := target - v
        if v,ok := store[remaning]; ok {
            return []int{v,i}
        }
        store[v] = i
    }

    return []int{}
}
