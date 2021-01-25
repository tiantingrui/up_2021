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

const src1 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhayo.co%2Fvigor%2Fwp-content%2Fuploads%2F2014%2F11%2Feiffel-tower.jpg&refer=http%3A%2F%2Fhayo.co&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614147253&t=63d01389025b67cb765a9bbf4e146c6a';
const src2 = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1480765940,3948902827&fm=26&gp=0.jpg';

(async function () {
    // img1
    const img1 = await loadImg(src1)
    console.log(img1.height, img1.width)
    // img2
    const img2 = await loadImg(src2)
    console.log(img2.height, img2.width)
})()