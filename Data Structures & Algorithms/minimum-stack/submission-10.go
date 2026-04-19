type MinStack struct {
    min *struct {val int}
    items []int
}

func Constructor() MinStack {
   return MinStack {
        min: nil,
        items: make([]int,0),
    }
}

func (this *MinStack) Push(val int) {
    if this.min == nil {
        this.min = &struct {val int}{val}
    } else if val < this.min.val {
        this.min.val = val
    }
    this.items = append(this.items,val)
}

func (this *MinStack) Pop() {
    var pop int
    this.items, pop = this.items[:len(this.items)-1], this.items[len(this.items)-1]
    if this.min == nil {
        return
    }
    if len(this.items) == 0 {
        this.min = nil
    }else if pop == this.min.val {
        min := this.items[0]
        for _, v := range this.items {
            if v < min {
                min = v
            }
        }
        this.min.val = min
    }
}

func (this *MinStack) Top() int {
    return this.items[len(this.items)-1]
}

func (this *MinStack) GetMin() int {
    return this.min.val
}
