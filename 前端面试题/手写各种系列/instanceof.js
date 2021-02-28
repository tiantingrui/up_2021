// 实现一个 instanceof

// 1. instanceof 不能判断 基础数据类型 返回false
// 2. 判断左边的原型 是否 与 右边的原型一致

function myInstanceof(left, right) {
    if (typeof left !== 'object' || left === null) {
        return false
    }
    // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left)
    while (true) {
        if (proto === false) return false
        if (proto === right.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}


// Object.prototype.toString.call()

function getType(obj) {
    let type = typeof obj
    if (type !== 'object') {
        // 如果是基本数据类型  用 typeof 直接返回
        return type 
    }
    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')
}