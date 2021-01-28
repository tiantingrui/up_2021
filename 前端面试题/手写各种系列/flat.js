function flat(arr) {
    // 查看数组中元素是否是数组
    const flag = arr.some(item => item instanceof Array)
    if (!flag) {
        return arr
    }
    const res = Array.prototype.concat.apply([], arr)
    return flat(res)
}