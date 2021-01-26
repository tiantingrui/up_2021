
// ajax
const xhr = new XMLHttpRequest()

xhr.open('GET', "/api", true)

xhr.onreadystatechange = function() {
    // 这里的函数异步执行
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            alert(xhr.responseText)
        }
    }
}

xhr.send(null)

xhr.open('POST', '/login', true) // true 是否异步

const postData = {
    username: 'terry',
    password: '123'
}

xhr.send(JSON.stringify(postData))

// promise 实现 ajax
function ajax(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else if (xhr.status = 404) {
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
}
const url = '/data/test.json'
ajax(url)
.then(res => console.log(res))
.catch(e => console.error(e))