// 事件绑定

function bindEvent(elem, type, fn) {
    elem.addEventLister(type, fn)
}
const a = document.getElementById('link1')
bindEvent(a, 'click', (e) => {
    e.preventDefault() // 阻止默认行为
    alert('clicked')
})


// 事件代理 - 场景： 瀑布流
const div1 = document.getElementById('div1')
div1.addEventListener('click', e => {
    e.preventDefault()
    const target = e.target
    if (target.nodeName = 'A') {
        alert(target.innerHTML)
    }
})


function bindEventProxy(elem, type, selector, fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        const target = event.target
        if (selector) {
            // 代理
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        } else {
            // 普通绑定
            fn.call(target, event)
        }
    })
}