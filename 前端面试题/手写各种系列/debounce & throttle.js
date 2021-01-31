// debounce 防抖

function debounce(fn, delay = 500) {
    let timer = null
    return function() {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}


// throttle 节流

function throttle(fn, delay = 500) {
    let timer = null
    return function() {
        if (timer) {
            return //! 注意这里
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}