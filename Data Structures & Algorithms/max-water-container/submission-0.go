func maxArea(heights []int) int {
    l,r := 0, len(heights)-1
    area := 0
    for l < r {
        lh, rh := heights[l], heights[r]
        a := (r-l) * min(lh,rh)
        area = max(a,area)
        if lh == rh {
            if heights[l+1] > heights[r-1] {
                l++
            } else {
                r--
            }
        } else if lh < rh {
            l++
        } else if rh < lh {
            r--
        }

    }
    return area
}
