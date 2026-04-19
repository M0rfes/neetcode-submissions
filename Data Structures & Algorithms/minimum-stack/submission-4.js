class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.lastMin = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(val < this.lastMin) {
            this.lastMin = val;
        }
        this.minStack.push(this.lastMin);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
        this.lastMin = this.minStack.at(-1) ?? Infinity;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1);
    }
}
