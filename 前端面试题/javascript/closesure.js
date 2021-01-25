//! 闭包

//* 1. 函数作为返回值
function create() {
    let a = 100
    return function() {
        console.log(a)
    }
}
let fn = create()
let a = 200
fn() // 100



//* 2. 函数作为参数

function print(fn) {
    let a = 200
    fn()
}
let a = 100
function fn() {
    console.log(a)
}
print(fn)  // 100

//! this
function aa() {
    console.log(this)
}

aa().call({x: 100}) // {x； 100}
aa().bind({x: 200})() // {x: 200}

const terry = {
    name: 'terry',
    getName() {
        console.log(this)
    },
    wait() {
        setTimeout(function() {
            // this === window
            console.log(this)
        })
    }
}


//! 闭包隐藏数据，只提供API
function createCache() {
    const data = {}
    return {
        set(key, val) {
            data[key] = val
        },
        get(key) {
            return data[key]
        }
    }
}

const c = createCache()
c.set('a', 100)
console.log(c.get('a'))