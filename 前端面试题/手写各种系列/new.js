function myNew() {
    let Constructor = [].shift.call(arguments)
    let obj = Object.create(Constructor.prototype)
    let rst = Constructor.apply(obj, arguments)
    return typeof rst === 'object' ? rst : obj

}