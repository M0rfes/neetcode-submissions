func longestConsecutive(nums []int) int {
    numSet := make(map[int]bool)
    for _, val := range nums {
        numSet[val] = true
    }

    longest := 0
    for key := range numSet {
        if _,left:=numSet[key - 1]; !left {
            length := 1
            for {
                if _,right := numSet[key+length]; right {
                    length++
                } else {
                    break
                }
            }
                if length > longest {
                    longest = length
                }
            }
        }
    return longest
    }

