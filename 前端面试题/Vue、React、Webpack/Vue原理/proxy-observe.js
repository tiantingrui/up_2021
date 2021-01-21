const data = {
    name: 'terry',
    age: 25,
    info: {
        city: 'hangzhou'
    }
}

const proxyData = reactive(data)

// 创建响应式
function reactive(target = {}) {
    if (typeof target !== 'object' || target === null) {
        return // 不是数组或者对象
    }

    // 代理配置
    const proxyConf = {
        get(target, key, receiver) {
            // 只处理本身（非原型）的属性
            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key)) {
                console.log('get', key)
            }
            const result = Reflect.get(target, key, receiver)
            console.log('get', key)
            // 深度监听
            // 性能是如何提升的？ 什么时候get 到 才去取值
            return reactive(result) 
        },
        set(target, key, val, receiver) {
            // 重复的数据不处理
            const oldVal = target[key]
            if (val === oldVal) {
                return true
            }

            const ownKeys = Reflect.ownKeys(target)
            if (owmKeys.includes(key)) {
                console.log('已有的key', key)
            } else {
                console.log('新增的key', key)
            }

            const result = Reflect.set(target, key, val, receiver)
            console.log('set', key, val)
            console.log('result', result)
            return result // 是否式设置成功
        },
        deleteProperty(target, key) {
            const result = Reflect.deleteProperty(target, key)
            console.log('delete property', key)
            console.log('result', result)
            return result // 是否删除成功
        }
    }

    // 生成代理对象
    const observed = new Proxy(target, proxyConf)
    return observed
}