// 创建 10 个 `<a>` 标签，点击的时候弹出来对应的序号

let a
for(let i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click', function(e) {
        e.preventDefault()
        alert(i)
    })

    document.body.appendChild(a)
}

// 实现bind
Function.prototype.bind1 = function() {
    // 将参数解析为数组
    const args = Array.prototype.slice.call(arguments)
    // 获取要指向的this (取出数组的第一项，数组剩余的就是传递的参数)
    const t = args.shift() // shift() 之后数组就剩下了 this 后面的其他参数
    const self = this
    return function() {
        // 执行原函数，并返回结果
        return self.apply(t, args)
    }
}

Function.prototype.bind2 = function() {
    const args = Array.prototype.slice.call(arguments)
    const t = args.shift()
    return () => {
        return this.apply(t, args)
    }
}