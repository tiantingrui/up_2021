// Vue2 响应式原理 Object.defineProperty()

// 触发更新视图
function updateView() {
    console.log('视图更新')
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype
// 创建新对象，原型指向 oldArrayProperty，再拓展新的方法不会影响原型，这样做避免污染全局原型
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift'].forEach(methodName => {
    arrProto[methodName] = function() {
        updateView() // 触发视图更新
        oldArrayProperty[methodName].call(this, ...arguments)
        // Array.prototype[methodName].call(this, ...arguments)
    }
})
// 重新定义属性，监听起来
function defineReactive(target, key, value) {
    // 深度监听，就是说如果value 是 个对象
    observer(value)

    // 核心API
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newVal) {
            if (newVal !== value) {
                // 深度监听， 万一set 的值是一个 object，下次更新之后就会监听到
                observe(newVal)

                // 设置新值
                // 注意， value 一直在闭包中，此处设置完之后，在get 时也是会获取最新的值
                value = newVal

                // 触发更新视图
                updateView()
            }
        }
    })
}

// 监听对象属性
function observer(target) {
    if (typeof target !== 'object' || target === null) {
        // 不是对象或者数组
        return target
    }

    if (Array.isArray(target)) {
        target.__proto__ = arrProto
    }

    // 重新定义各个属性（for in 也可以遍历数组）
    for (let key in target) {
        defineReactive(target, key, target[key])
    }
}

// 准备数据
const data = {
    name: 'terry',
    age: 25,
    info: {
        base: '杭州'
    },
    list: [10, 20, 30]
}

// 监听数据
observer(data)

// 测试
data.name = 'zmn'
data.age = 24
data.x = '100' // 新增属性，监听不到 -- 所以有 Vue.set
delete data.name // 删除属性，监听不到 -- 所以有 Vue.delete
data.info.base = '北京' // 深度监听
data.list.push(40) // 监听数组