var CustomStack = function(maxSize) {
    this.stack = []
    this.maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.stack.length < this.maxSize)
        this.stack.push(x)
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    const result = this.stack.pop()
    return result !== undefined ? result : -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for (let i=0; i < k && i < this.stack.length; i++){
        this.stack[i] += val
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */