Function.prototype.myCall = function(context) {
    const args = [...arguments].slice(1)

    context.fn = this

    const rst = context.fn(...args)
    delete context.fn

    return rst
}

Function.prototype.myApply = function(context) {
    const args = arguments[1] || []
    context.fn = this

    const rst = context.fn(...args)
    delete context.fn

    return rst

}

Function.prototype.myBind = function(context) {
    const args = [...arguments].slice(1)

    return function() {
        context.myApply(context, args)
    }
}