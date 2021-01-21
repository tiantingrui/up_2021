const data = {
    name: 'terry',
    age: 25
}

// const data = ['a', 'b', 'c']

const proxyData = new Proxy(data, {
    get(target, key, receiver) {
        // 只处理本身（非原型）的属性
        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key)) {
            console.log('get', key)
        }
        const result = Reflect.get(target, key, receiver)
        console.log('get', key)
        return result // 返回结果
    },
    set(target, key, val, receiver) {
        // 重复的数据不处理
        const oldVal = target[key]
        if (val === oldVal) {
            return true
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
})