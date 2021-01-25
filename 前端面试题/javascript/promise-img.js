//  promise 加载图片
const url = ''

function loadImg(src) {
    return new Promise(
        (resolve, reject) => {
            const img = document.createElement('img')
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                reject(new Error(`图片加载失败 ${src}`))
            }
            img.src = src
        }
    )
}

loadImg(url).then(img => {
    console.log(img.width)
    return img
}).then(img => {
    console.log(img.height)
}).catch(e => console.error(e))