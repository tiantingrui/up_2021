// 手写深度比较， 模拟 lodash.isEqual
// 实现如下效果
const obj1 = {
    a: 10,
    b: {
        x: 100,
        y: 200
    }
}
const obj2 = {
    a: 10,
    b: {
        x: 100,
        y: 200
    }
}

// 判断是否是对象或数组
function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}

// 全相等
function isEqual(obj1, obj2) {
    if (!isObject(obj1) || !isObject(obj2)) {
        // 值类型
        return obj1 === obj2
    }
    if (obj1 === obj2) {
        return true
    }
    // 两个都是对象或数组，而且不相等
    // 1. 先取出obj1 和 obj2 的 keys，比较个数
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }
    // 2. 以 obj1 为基准 和 obj2 一次递归比较
    for (let key in obj1) {
        // 比较当前 key 的 val  --- 递归！！！
        const res = isEqual(obj1[key], obj2[key])
        if (!res) {
            return false 
        }
    }
    // 3. 全相等
    return true
}

isEqual(obj1, obj2) === true
